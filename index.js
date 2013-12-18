var exec = require('child_process').exec,
    os = require('os'),
    bytes = require('bytes'),
    colors = require('./art/colors.js'),
    elapsed = require('./lib/elapsed.js'),
    deDict = require('./lib/de-dict.json'),
    wmDict = require('./lib/wm-dict.json');

function color(used, total) {
  var quadrant = Math.min(Math.ceil( Math.floor(used / total * 100) / 33), 3),
      cols = [ colors.greenB, colors.greenB, colors.yellowB, colors.redB ];
  return cols[quadrant] + bytes(used) + colors.clear + ' / ' + bytes(total);
}

var result = {
      user: { key: 'User',  value: process.env.USER },
      hostname: { key: 'Hostname', value: os.hostname() },
      uptime: { key: 'Uptime', value: elapsed(os.uptime()) },
      cpu: { key: 'CPU', value: os.cpus()[0].model },
      ram: { key: 'RAM', value: color( os.totalmem() - os.freemem(), os.totalmem()) },
      sh: { key: 'Shell', value: process.env.SHELL.split('/').pop() },
      term: { key: 'Terminal', value: process.env.TERM.split('/').pop() }
    },
    processes,
    distro;

var tasks = [
  function(done) {
    switch(distro) {
      case 'Debian':
      case 'Ubuntu':
      case 'Fedora':
      case 'CrunchBang':
        exec('lsb_release -r', function(err, stdout, stderr) {
          var release = stdout.trim().split(':')[1].trim();
          result.distro = { key: 'OS', value: distro + ' ' + release + ' ' + os.arch() };
          done();
        });
      break;
      case 'Arch':
        result.distro = { key: 'OS', value:  'Arch Linux ' + os.arch() };
        done();
        break;
      case 'LinuxMint':
        exec('lsb_release -r', function(err, stdout, stderr) {
          var release = stdout.trim().split(':')[1].trim();
          result.distro = { key: 'OS', value: 'Mint ' + ' ' + release + ' ' + os.arch() };
          done();
        });
        break;
      case 'OS X':
        exec('sw_vers', function(err, stdout, stderr) {
          var items = { };
          stdout.trim().split('\n').forEach(function(line) {
            var parts = line.split(':').map(function(s) {
              return s.trim();
            });
            items[parts[0]] = parts[1];
          });
          result.distro = {
            key: 'OS',
            value: distro + ' ' +
            items['ProductVersion'] + ' ' +
            items['BuildVersion'] + ' ' + os.arch()
          };
          done();
        });

        break;
      default:
        result.distro = { key: 'OS', value: distro + ' ' + os.arch() };
        return done();
    }
  },
  function(done) {
    if(distro == 'Windows') {
      return done();
    }
    exec('uname -r', function (err, stdout, stderr) {
      result.kernel = { key: 'Kernel', value: stdout.trim() };
      done();
    });
  },
  function(done) {
    var wm = '';
    Object.keys(wmDict).forEach(function(name) {
      if (processes.indexOf(name) > -1) {
        result.wm = { key: 'Window Manager', value: wmDict[name] };
      }
    });
    done();
  },
  function(done) {
    var de = '';
    Object.keys(deDict).forEach(function(name) {
      if (processes.indexOf(name) > -1) {
        result.de = { key: 'Desktop Environment', value: deDict[name] };
      }
    });
    done();
  },
  function(done) {
    switch(distro) {
      case 'Debian':
      case 'Ubuntu':
      case 'LinuxMint':
      case 'CrunchBang':
        exec('dpkg --get-selections | grep -v deinstall | wc -l', function(err, stdout, stderr) {
          result.packages = { key: 'Packages', value: stdout.trim() };
          done();
        });
      break;
      case 'Fedora':
        exec('rpm -qa | wc -l', function(err, stdout, stderr) {
          result.packages = { key: 'Packages', value: stdout.trim() };
          done();
        });
      break;
      case 'Arch':
        exec('pacman -Q | wc -l', function(err, stdout, stderr) {
          result.packages = { key: 'Packages', value: stdout.trim() };
          done();
        });
        break;
      case 'OS X':
        // port
        exec('port installed 2>/dev/null | wc -l', function(err, stdout, stderr) {
          var packages = 0;
          // brew
          exec('brew list -1 2>/dev/null | wc -l', function(err, stdout, stderr) {
            packages += parseInt(stdout.trim(), 10);
            result.packages = { key: 'Packages', value: packages };
            done();
          });
        });
        break;
      default:
        return done();
    }
  },
  function(done) {
    if(os.platform() == 'darwin') {
      exec("system_profiler SPDisplaysDataType | awk '/Resolution:/ {print $2\"x\"$4\" \"}'", function(err, stdout, stderr) {
        // may require extra cleanup
        result.resolution = { key: 'Resolution', value: stdout.trim().split('\n').map(function(i) { return i.trim(); }).join(', ') };
        done();
      });
    } else if(process.env.DISPLAY) {
      exec('xdpyinfo', function(err, stdout, stderr) {
        var resolution = stdout.trim().split('\n').filter(function(line) {
          return /dim.*/.test(line);
        }).map(function(line) {
          return line.replace(/dimensions:\s*([0-9]+x[0-9]+).*/, '$1').trim();
        }).join(', ');
        result.resolution = { key: 'Resolution', value: resolution };
        done();
      });
    } else {
      result.resolution = { key: 'Resolution', value: 'No X Server' };
      done();
    }
  },
  function(done) {
    switch(os.platform()) {
      case 'darwin':
        exec('df -H / 2>/dev/null | tail -1', function(err, stdout, stderr) {
          var total = stdout.trim().split('\n').pop(),
              used = total.split(/\s+/)[3],
              free = total.split(/\s+/)[2];
          result.disk = { key: 'Disk', value: used + ' / ' + free };
          done();
        });
        break;
      case 'win32':
      case 'win64':
        return done();
      default:
        exec('df -Tlh --total -t ext4 -t ext3 -t ext2 -t reiserfs -t jfs -t ntfs -t fat32 -t btrfs -t fuseblk', function (err, stdout, stderr) {
          var total = stdout.trim().split('\n').pop(),
              used = total.split(/\s+/)[3],
              free = total.split(/\s+/)[2];
          result.disk = { key: 'Disk', value: used + ' / ' + free };
          done();
        });
    }
  }
];

function out(distro, item) {
  if(!item || !item.key || !item.value) {
    return '';
  }
  var cols = {
    'Ubuntu': colors.redB,
    'Arch': colors.blueB,
    'Debian': colors.redB,
    'Fedora': colors.blueB,
    'CrunchBang': colors.whiteB,
    'LinuxMint': colors.greenB,
    'OS X': colors.whiteB,
    'Windows': colors.whiteB
  };
  return cols[distro] + item.key + ': ' + colors.clear + item.value;
}

function fullParallel(callbacks, last) {
  var total = 0;
  callbacks.forEach(function(callback, index) {
    callback( function() {
      total++;
      if(total == callbacks.length) {
        last();
      }
    });
  });
}


switch(os.platform()) {
  case 'darwin':
    processes = [];
    distro = 'OS X';
    result.wm = { key: 'Window Manager', value: 'Quartz Compositor' };
    fullParallel(tasks, show);
    break;
  case 'linux':
  case 'freebsd':
  case 'sunos':
    // start by getting the processes
    exec('ps -u ' + process.env.USER, function (err, stdout, stderr) {
      processes = stdout.split('\n').slice(1).map(function(line) {
        var cmd = line.split(/\s+/)[4];
        return (/xmonad/.test(cmd) ? 'xmonad' : cmd);
      });
      exec('lsb_release -i', function (err, stdout, stderr) {
        distro = stdout.trim().split(':')[1].trim();
        fullParallel(tasks, show);
      });
    });
    break;
  case 'win32':
  case 'win64':
    processes = [];
    distro = 'Windows';
    result.wm = { key: 'Window Manager', value: 'DWM' };
    fullParallel(tasks, show);
    break;
}

function res(distro) {
  return  [
            'user', 'hostname', 'distro', 'kernel', 'uptime',
            'wm', 'de', 'sh', 'term', 'packages', 'cpu',
            'resolution', 'ram', 'disk'
          ].map(function(key) {
            return out(distro, result[key]);
          }).filter(Boolean)
          .concat(new Array(20).join(' ').split(''));
}

function show() {
  if(false) {
    console.log(require('./art/ubuntu.js')(res('Ubuntu')));
    console.log(require('./art/debian.js')(res('Debian')));
    console.log(require('./art/linuxmint.js')(res('LinuxMint')));
    console.log(require('./art/crunchbang.js')(res('CrunchBang')));
    console.log(require('./art/fedora.js')(res('Fedora')));
    console.log(require('./art/arch.js')(res('Arch')));
    console.log(require('./art/osx.js')(res('OS X')));
    console.log(require('./art/windows.js')(res('Windows')));
  } else {
    switch(distro) {
      case 'Ubuntu':
        console.log(require('./art/ubuntu.js')(res(distro)));
        break;
      case 'Debian':
        console.log(require('./art/debian.js')(res(distro)));
        break;
      case 'LinuxMint':
        console.log(require('./art/linuxmint.js')(res(distro)));
        break;
      case 'CrunchBang':
        console.log(require('./art/crunchbang.js')(res(distro)));
        break;
      case 'Fedora':
        console.log(require('./art/fedora.js')(res(distro)));
        break;
      case 'Arch':
        console.log(require('./art/arch.js')(res(distro)));
        break;
      case 'OS X':
        console.log(require('./art/osx.js')(res(distro)));
        break;
      case 'Windows':
        console.log(require('./art/windows.js')(res(distro)));
        break;
      default:
    }
  }
}
