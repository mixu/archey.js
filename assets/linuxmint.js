var colors = require('./colors.js');

var whiteB = colors['whiteB'],
    greenB = colors['greenB'],
    clear = colors['clear'];

module.exports = function(result) {
  var counter = 0;

  return [
    "%s                                     %s",
    "%s MMMMMMMMMMMMMMMMMMMMMMMMMmds+.      %s",
    "%s MMm----::-://////////////oymNMd+`   %s",
    "%s MMd      %s/++                %s-sNMd:  %s",
    "%s MMNso/`  %sdMM    `.::-. .-::.` %s.hMN: %s",
    "%s ddddMMh  %sdMM   :hNMNMNhNMNMNh: `%sNMm %s",
    "%s     NMm  %sdMM  .NMN/-+MMM+-/NMN` %sdMM %s",
    "%s     NMm  %sdMM  -MMm  `MMM   dMM. %sdMM %s",
    "%s     NMm  %sdMM  -MMm  `MMM   dMM. %sdMM %s",
    "%s     NMm  %sdMM  .mmd  `mmm   yMM. %sdMM %s",
    "%s     NMm  %sdMM`  ..`   ...   ydm. %sdMM %s",
    "%s     hMM-  %s+MMd/-------...-:sdds %sMMM %s",
    "%s     -NMm-  %s:hNMNNNmdddddddddy/` %sdMM %s",
    "%s      -dMNs-``%s-::::-------.``    %sdMM %s",
    "%s       `/dMNmy+/:-------------:/yMMM %s",
    "%s          ./ydNMMMMMMMMMMMMMMMMMMMMM %s",
    "%s                                     %s",
    "%s                                     %s",
    "%s"
  ].join('\n').replace(/%s/g, function(match) {
    return [
      whiteB, result[0], whiteB, result[1], whiteB, result[2], whiteB, greenB, whiteB, result[3], whiteB, greenB, whiteB, result[4], whiteB, greenB, whiteB, result[5], whiteB, greenB, whiteB, result[6], whiteB, greenB, whiteB, result[7], whiteB, greenB, whiteB, result[8], whiteB, greenB, whiteB, result[9], whiteB, greenB, whiteB, result[10], whiteB, greenB, whiteB, result[11], whiteB, greenB, whiteB, result[12], whiteB, greenB, whiteB, result[13], whiteB, result[14], whiteB, result[15], whiteB, result[16], whiteB, result[17], clear
    ][counter++];
  });
};

