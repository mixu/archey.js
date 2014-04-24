var colors = require('./colors.js');

var blueN = colors['blueN'],
    blueB = colors['blueB'],
    cyanB = colors['cyanB'],
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
      blueN, result[0], blueB, blueN, result[1],
      blueB, blueN, result[2],
      cyanB, blueB, blueN, result[3],
      cyanB, blueB, result[4],
      cyanB, blueB, result[5],
      blueB, cyanB, blueB, result[6],
      blueB, cyanB, blueB, result[7],
      blueB, cyanB, result[8],
      blueB, cyanB, blueN, result[9],
      blueB, cyanB, blueN, result[10],
      cyanB, blueN, result[11],
      cyanB, blueN, result[12],
      cyanB, blueN, cyanB, result[13],
      blueN, cyanB, result[14],
      blueN, cyanB, result[15],
      cyanB, result[16],
      cyanB, result[17],
      clear
    ][counter++];
  });
};
