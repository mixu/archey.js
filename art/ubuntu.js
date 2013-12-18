var colors = require('./colors.js');

var redN = colors['redN'],
    redB = colors['redB'],
    yellowB = colors['yellowB'],
    clear = colors['clear'];

module.exports = function(result) {
  var counter = 0;

  return [
    '%s                          .oyhhs:   %s',
    '%s                 ..--.., %sshhhhhh-   %s',
    '%s               -+++++++++`:%syyhhyo`  %s',
    '%s          .--  %s-++++++++/-.-%s::-`    %s',
    '%s        .::::-   %s:-----:/+++/++/.   %s',
    '%s       -:::::-.          %s.:++++++:  %s',
    '%s  ,,, %s.:::::-`             %s.++++++- %s',
    '%s./+++/-%s`-::-                %s./////: %s',
    '%s+++++++ %s.::-                        %s',
    '%s./+++/-`%s-::-                %s:yyyyyo %s',
    '%s  ``` `%s-::::-`             %s:yhhhhh: %s',
    '%s       -:::::-.         %s`-ohhhhhh+  %s',
    '%s        .::::-` %s-o+///+oyhhyyyhy:   %s',
    '%s         `.--  %s/yhhhhhhhy+%s,....     %s',
    '%s               /hhhhhhhhh%s-.-:::;    %s',
    '%s               `.:://::- %s-:::::;    %s',
    "%s                         `.-:-'     %s",
    '%s                                    %s'
  ].join('\n').replace(/%s/g, function(match) {
    return [
      redN, result[0], redB, redN, result[1], redB, redN, result[2],
      yellowB, redB, redN, result[3], yellowB, redB, result[4],
      yellowB, redB, result[5], redB, yellowB, redB, result[6],
      redB, yellowB, redB, result[7], redB, yellowB, result[8],
      redB, yellowB, redN, result[9], redB, yellowB, redN, result[10],
      yellowB, redN, result[11], yellowB, redN, result[12],
      yellowB, redN, yellowB, result[13], redN, yellowB, result[14],
      redN, yellowB, result[15], yellowB, result[16], yellowB, result[17],
      clear
    ][counter++];
  });
};
