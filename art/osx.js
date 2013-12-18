
var colors = require('./colors.js');

var greenN = colors['greenN'],
    yellowN = colors['yellowN'],
    redN = colors['redN'],
    redB = colors['redB'],
    magentaN = colors['magentaN'],
    blueN = colors['blueN'],
    clear = colors['clear'];

module.exports = function(result) {
  var counter = 0;

  return [
  "%s                :++++.         %s",
  "%s               /+++/.          %s",
  "%s       .:-::- .+/:-\`\`.::-      %s",
  "%s    .:/++++++/::::/++++++/:\`   %s",
  "%s  .:///////////////////////:\`  %s",
  "%s  ////////////////////////\`    %s",
  "%s -+++++++++++++++++++++++\`     %s",
  "%s /++++++++++++++++++++++/      %s",
  "%s /sssssssssssssssssssssss.     %s",
  "%s :ssssssssssssssssssssssss-    %s",
  "%s  osssssssssssssssssssssssso/\` %s",
  "%s  \`syyyyyyyyyyyyyyyyyyyyyyyy+\` %s",
  "%s   \`ossssssssssssssssssssss/   %s%s",
  "%s     :ooooooooooooooooooo+.    %s%s",
  "%s      \`:+oo+/:-..-:/+o+/-      %s%s"

  ].join('\n').replace(/%s/g, function(match) {
    return [
greenN, result[0],
greenN, result[1],
greenN, result[2],
greenN, result[3],
yellowN, result[4],
yellowN, result[5],
redN, result[6],
redN, result[7],
redB, result[8],
redB, result[9],
magentaN, result[10],
magentaN, result[11],
blueN, clear, result[12],
blueN, clear, result[13],
blueN, clear, result[14],
      clear
    ][counter++];
  });
};
