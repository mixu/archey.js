var colors = require('./colors.js');

var blueN = colors['yellowN'],
    blueB = colors['yellowB'],
    clear = colors['clear'];

module.exports = function(result) {
  var counter = 0;

  return [
    "%s",
    "%s ██████████████████  ████████  %s",
    "%s ██████████████████  ████████  %s",
    "%s ██████████████████  ████████  %s",
    "%s ██████████████████  ████████  %s",
    "%s ████████            ████████  %s",
    "%s ████████  ████████  ████████  %s",
    "%s ████████  ████████  ████████  %s",
    "%s           ████████  ████████  %s",
    "%s ████████  ████████  ████████  %s",
    "%s ████████  ████████  ████████  %s",
    "%s ████████  ████████  ████████  %s",
    "%s ████████  ████████  ████████  %s",
    "%s ████████  ████████  ████████  %s",
    "%s ████████  ████████  ████████  %s",
    "%s ████████  ████████  ████████  %s",
    "%s ████████  ████████  ████████  %s",
    "%s ████████  ████████  ████████  %s",
    "%s %s%s"
  ].join('\n').replace(/%s/g, function(match) {
    return [
      blueB, 
      blueB, result[0], blueB, result[1],
      blueB, result[2], blueB, result[3],
      blueB, result[4], blueB, result[5],
      blueB, result[6], blueB, result[7],
      blueB, result[8], blueB, result[9],
      blueB, result[10], blueB, result[11],
      blueB, result[12], blueB, result[13],
      blueB, result[14], blueB, result[15],
      blueB, result[16], blueB, result[17],
      clear
    ][counter++];
  });
};

