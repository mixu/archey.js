var colors = require('./colors.js');

var whiteB = colors['whiteB'],
  redB = colors['redB'],
  clear = colors['clear'];

module.exports = function (result) {
  var counter = 0;

  return [
    "%s  ```        %s              `        %s",
    "%s ` `.....---.%s......--.```   -/      %s",
    "%s +o   .--`   %s      /y:`      +.     %s",
    "%s  yo`:.      %s      :o      `+-      %s",
    "%s   y/        %s       -/`   -o/       %s",
    "%s  .-         %s         ::/sy+:.      %s",
    "%s  /          %s           `--  /      %s",
    "%s `:          %s                :`     %s",
    "%s `:          %s                :`     %s",
    "%s  /          %s                /      %s",
    "%s  .-         %s               -.      %s",
    "%s   --        %s              -.       %s",
    "%s    `:`      %s            `:`        %s",
    "%s      .--             `--.          %s",
    "%s         .---.....----.             %s"
  ].join('\n').replace(/%s/g, function (match) {
    return [
      whiteB, redB, redB,
      whiteB, redB, result[0],
      whiteB, redB, result[1],
      whiteB, redB, result[2],
      whiteB, redB, result[3],
      whiteB, redB, result[4],
      whiteB, redB, result[5],
      whiteB, redB, result[6],
      whiteB, redB, result[7],
      whiteB, redB, result[8],
      whiteB, redB, result[9],
      whiteB, redB, result[10],
      whiteB, redB, result[11],
      redB, result[12],
      redB, result[13],
      redB, result[14],
      redB, result[15],
      redB, result[16],
      redB, result[17],
      clear
    ][counter++];
  });
};
