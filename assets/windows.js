var colors = require('./colors.js');

var redN = colors['redN'],
    greenN = colors['greenN'],
    blueN = colors['blueN'],
    yellowB = colors['yellowB'],
    clear = colors['clear'];

module.exports = function(result) {
  var counter = 0;

  return [

  "%s        ,.=:!!t3Z3z.,                %s",
  "%s       :tt:::tt333EE3                %s",
  "%s       Et:::ztt33EEEL%s @Ee.,      .., %s",
  "%s      ;tt:::tt333EE7%s ;EEEEEEttttt33# %s",
  "%s     :Et:::zt333EEQ.%s \$EEEEEttttt33QL %s",
  "%s     it::::tt333EEF%s @EEEEEEttttt33F  %s",
  "%s    ;3=*^\`\`\`\"*4EEV%s :EEEEEEttttt33@.  %s",
  "%s    ,.=::::!t=., %s\`%s @EEEEEEtttz33QF   %s",
  "%s   ;::::::::zt33)%s   \"4EEEtttji3P*    %s",
  "%s  :t::::::::tt33.%s:Z3z..%s  \`\`%s ,..g.    %s",
  "%s  i::::::::zt33F%s AEEEtttt::::ztF     %s",

  "%s ;:::::::::t33V%s ;EEEttttt::::t3      %s",
  "%s E::::::::zt33L%s @EEEtttt::::z3F      %s",
  "%s{3=*^\`\`\`\"*4E3)%s ;EEEtttt:::::tZ\`      %s",
  "%s             \`%s :EEEEtttt::::z7       %s",
  "%s                 \"VEzjt:;;z>*\`       %s",
  "%s"
  ].join('\n').replace(/%s/g, function(match) {
    return [
      redN, result[0],
      redN, result[1],
      redN, greenN, result[2],
      redN, greenN, result[3],
      redN, greenN, result[4],
      redN, greenN, result[5],
      redN, greenN, result[6],
      blueN, redN, greenN, result[7],
      blueN, greenN, result[8],
      blueN, yellowB, greenN, yellowB, result[9],
      blueN, yellowB, result[10],
      blueN, yellowB, result[11],
      blueN, yellowB, result[12],
      blueN, yellowB, result[13],
      blueN, yellowB, result[14],
      yellowB, result[15],
      clear
    ][counter++];
  });
};
