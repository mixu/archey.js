var exec = require('child_process').exec,
    os = require('os'),
    deDict = require('./assets/de-dict.json'),
    wmDict = require('./assets/wm-dict.json');

var result = {},
    processes,
    distro;

var tasks = [
  function(done) {
    result.user = 'User: ' + process.env.USER;
    done();
  },
  function(done) {
    result.hostname = 'Hostname: ' + os.hostname();
    done();
  },
  function(done) {
    switch(distro) {
      case 'Debian':
      case 'Ubuntu':
      case 'Fedora':
      case 'CrunchBang':
        exec('lsb_release -r', function(err, stdout, stderr) {
          var release = stdout.trim().split(':')[1].trim();
          result.distro = 'OS: ' + distro + ' ' + release + ' ' + os.arch();
          done();
        });
      break;
      case 'Arch':
        result.distro = 'OS: Arch Linux ' + os.arch();
        done();
        break;
      case 'LinuxMint':
        exec('lsb_release -r', function(err, stdout, stderr) {
          var release = stdout.trim().split(':')[1].trim();
          result.distro = 'OS: Mint ' + ' ' + release + ' ' + os.arch();
          done();
        });
        break;
    }
  },
  function(done) {
    if(distro == 'Windows') {
      return done();
    }
    exec('uname -r', function (err, stdout, stderr) {
      result.kernel = 'Kernel: ' + stdout.trim();
      done();
    });
  },
  function(done) {
    result.uptime = 'Uptime: ' + os.uptime();
    done();
  },
  function(done) {
    var wm = '';
    Object.keys(wmDict).forEach(function(name) {
      if (processes.indexOf(name) > -1) {
        wm = wmDict[name];
      }
    });
    result.wm = 'Window Manager: ' + wm;
    done();
  },
  function(done) {
    var de = '';
    Object.keys(deDict).forEach(function(name) {
      if (processes.indexOf(name) > -1) {
        de = deDict[name];
      }
    });
    result.de = 'Desktop Environment: ' + de;
    done();
  },
  function(done) {
    result.sh = 'Shell: ' + process.env.SHELL.split('/').pop();
    done();
  },
  function(done) {
    result.term = 'Terminal: ' + process.env.TERM.split('/').pop();
    done();
  },
  function(done) {
    switch(distro) {
      case 'Debian':
      case 'Ubuntu':
      case 'LinuxMint':
      case 'CrunchBang':
        exec('dpkg --get-selections | grep -v deinstall | wc -l', function(err, stdout, stderr) {
          result.packages = 'Packages: ' + stdout.trim();
          done();
        });
      break;
      case 'Fedora':
        exec('rpm -qa | wc -l', function(err, stdout, stderr) {
          result.packages = 'Packages: ' + stdout.trim();
          done();
        });
      break;
      case 'Arch':
        exec('pacman -Q | wc -l', function(err, stdout, stderr) {
          result.packages = 'Packages: ' + stdout.trim();
          done();
        });
        break;
    }
  },
  function(done) {
    result.cpu = 'CPU: ' + os.cpus()[0].model;
    done();
  },
  function(done) {
    result.ram = 'RAM: ' + os.freemem() + ' / ' + os.totalmem();
    done();
  },
  function(done) {
    if(distro == 'Windows') {
      return done();
    }
    exec('df -Tlh --total -t ext4 -t ext3 -t ext2 -t reiserfs -t jfs -t ntfs -t fat32 -t btrfs -t fuseblk', function (err, stdout, stderr) {
      var total = stdout.trim().split('\n').pop(),
          used = total.split(/\s+/)[3],
          free = total.split(/\s+/)[2];
      result.disk = 'Disk: ' + used + ' / ' + free;
      done();
    });
  }
];

function fullParallel(callbacks, last) {
  var total = 0;
  callbacks.forEach(function(callback, index) {
    callback( function() {
      total++;
      if(total == callbacks.length) {
        last([
          result['user'],
          result['hostname'],
          result['distro'],
          result['kernel'],
          result['uptime'],
          result['wm'],
          result['de'],
          result['sh'],
          result['term'],
          result['packages'],
          result['cpu'],
          result['ram'],
          result['disk'],
          '',
          '',
          '',
          '',
          '',
          ''
        ]);
      }
    });
  });
}


switch(os.platform()) {
  case 'darwin':
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
    fullParallel(tasks, show);
    break;
}

function show(result) {
  console.log(require('./assets/ubuntu.js')(result));

  console.log();

  console.log(require('./assets/arch.js')(result));

  console.log();

  console.log(require('./assets/debian.js')(result));

  console.log();

  console.log(require('./assets/fedora.js')(result));

  console.log();

  console.log(require('./assets/crunchbang.js')(result));

  console.log();

  console.log(require('./assets/linuxmint.js')(result));

  console.log();

  console.log(require('./assets/windows.js')(result));

  console.log();

  console.log(require('./assets/osx.js')(result));
}
