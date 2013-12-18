var colors = require('./colors.js');

var blueN = colors['blueN'],
    blueB = colors['blueB'],
    whiteB = colors['whiteB'],
    clear = colors['clear'];

module.exports = function(result) {
  var counter = 0;

  return [
    "%s           :/------------://        %s",
    "%s        :------------------://      %s",
    "%s      :-----------%s/shhdhyo/%s-://     %s",
    "%s    /-----------%somMMMNNNMMMd/%s-:/    %s",
    "%s   :-----------%ssMMMdo:/%s       -:/   %s",
    "%s  :-----------%s:MMMd%s-------    --:/  %s",
    "%s  /-----------%s:MMMy%s-------    ---/  %s",
    "%s :------    --%s/+MMMh/%s--        ---: %s",
    "%s :---     %soNMMMMMMMMMNho%s     -----: %s",
    "%s :--      %s+shhhMMMmhhy++%s   ------:  %s",
    "%s :-      -----%s:MMMy%s--------------/  %s",
    "%s :-     ------%s/MMMy%s-------------:   %s",
    "%s :-      ----%s/hMMM+%s------------:    %s",
    "%s :--%s:dMMNdhhdNMMNo%s-----------:      %s",
    "%s :---%s:sdNMMMMNds:%s----------:        %s",
    "%s :------%s:://:%s-----------://         %s",
    "%s :--------------------://           %s",
    "%s                                    %s",
    "%s "
  ].join('\n').replace(/%s/g, function(match) {
    return [
      blueN, result[0], blueN, result[1], blueN, whiteB, blueN, result[2], blueN, whiteB, blueN, result[3], blueN, whiteB, blueN, result[4], blueN, whiteB, blueN, result[5], blueN, whiteB, blueN, result[6], blueN, whiteB, blueN, result[7], blueN, whiteB, blueN, result[8], blueN, whiteB, blueN, result[9], blueN, whiteB, blueN, result[10], blueN, whiteB, blueN, result[11], blueN, whiteB, blueN, result[12], blueN, whiteB, blueN, result[13], blueN, whiteB, blueN, result[14], blueN, whiteB, blueN, result[15], blueN, result[16], blueN, result[17], clear
    ][counter++];
  });
};


