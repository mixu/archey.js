var colors = require('./colors.js');

var blueN = colors['blueN'],
    blueB = colors['blueB'],
    clear = colors['clear'];

module.exports = function(result) {
  var counter = 0;

  return [
    "%s",
    "%s               +                %s",
    "%s               #                %s",
    "%s              ###               %s",
    "%s             #####              %s",
    "%s             ######             %s",
    "%s            ; #####;            %s",
    "%s           +##.#####            %s",
    "%s          +##########           %s",
    "%s         ######%s#####%s##;         %s",
    "%s        ###%s############%s+        %s",
    "%s       #%s######   #######        %s",
    "%s     .######;     ;###;`\".      %s",
    "%s    .#######;     ;#####.       %s",
    "%s    #########.   .########`     %s",
    "%s   ######'           '######    %s",
    "%s  ;####                 ####;   %s",
    "%s  ##'                     '##   %s",
    "%s #'                         `#  %s%s"
  ].join('\n').replace(/%s/g, function(match) {
    return [
      blueB, blueB, result[0], blueB, result[1],
      blueB, result[2], blueB, result[3], blueB, result[4],
      blueB, result[5], blueB, result[6], blueB, result[7],
      blueB, blueN, blueB, result[8], blueB, blueN, blueB, result[9],
      blueB, blueN, result[10], blueN, result[11], blueN,
      result[12], blueN, result[13], blueN, result[14],
      blueN, result[15], blueN, result[16], blueN, result[17],
      clear
    ][counter++];
  });
};

