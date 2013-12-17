var colors = require('./colors.js');

var redN = colors['redN'],
    redB = colors['redB'],
    clear = colors['clear'];

module.exports = function(result) {
  var counter = 0;

  return [
    "%s",
    "%s                                  %s",
    "%s          _sudZUZ#Z#XZo=_         %s",
    "%s       _jmZZ2!!~---~!!X##wx       %s",
    "%s    .<wdP~~            -!YZL,     %s",
    "%s   .mX2'       _xaaa__     XZ[.   %s",
    "%s   oZ[      _jdXY!~?S#wa   ]Xb;   %s",
    "%s  _#e'     .]X2(     ~Xw|  )XXc   %s",
    "%s .2Z`      ]X[.       xY|  ]oZ(   %s",
    "%s .2#;      )3k;     _s!~   jXf`   %s",
    "%s  1Z>      -]Xb/    ~    __#2(    %s",
    "%s  -Zo;       +!4ZwerfgnZZXY'      %s",
    "%s   *#[,        ~-?!!!!!!-~        %s",
    "%s    XUb;.                         %s",
    "%s     )YXL,,                       %s",
    "%s       +3#bc,                     %s",
    "%s         -)SSL,,                  %s",
    "%s            ~~~~~                 %s",
    "%s                                  %s",
    "%s "
  ].join('\n').replace(/%s/g, function(match) {
    return [
      redB, redB, result[0], redB, result[1],
      redB, result[2], redB, result[3], redB, result[4],
      redB, result[5], redB, result[6], redB, result[7],
      redB, result[8], redN, result[9], redN, result[10],
      redN, result[11], redN, result[12], redN, result[13],
      redN, result[14], redN, result[15], redN, result[16],
      redN, result[17],
      clear
    ][counter++];
  });
};

