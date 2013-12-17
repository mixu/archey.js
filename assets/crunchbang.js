var colors = require('./colors.js');

var whiteN = colors['whiteN'],
    clear = colors['clear'];

module.exports = function(result) {
  var counter = 0;

  return [
    "%s                ___       ___      _  %s",
    "%s               /  /      /  /     | | %s",
    "%s              /  /      /  /      | | %s",
    "%s             /  /      /  /       | | %s",
    "%s     _______/  /______/  /______  | | %s",
    "%s    /______   _______   _______/  | | %s",
    "%s          /  /      /  /          | | %s",
    "%s         /  /      /  /           | | %s",
    "%s        /  /      /  /            | | %s",
    "%s ______/  /______/  /______       | | %s",
    "%s/_____   _______   _______/       | | %s",
    "%s     /  /      /  /               | | %s",
    "%s    /  /      /  /                |_| %s",
    "%s   /  /      /  /                  _  %s",
    "%s  /  /      /  /                  | | %s",
    "%s /__/      /__/                   |_| %s",
    "%s                                      %s",
    "%s                                      %s",
    "%s"
  ].join('\n').replace(/%s/g, function(match) {
    return [
      whiteN, result[0], whiteN, result[1], whiteN, result[2], whiteN, result[3], whiteN, result[4], whiteN, result[5], whiteN, result[6], whiteN, result[7], whiteN, result[8], whiteN, result[9], whiteN, result[10], whiteN, result[11], whiteN, result[12], whiteN, result[13], whiteN, result[14], whiteN, result[15], whiteN, result[16], whiteN, result[17], clear
    ][counter++];
  });
};


