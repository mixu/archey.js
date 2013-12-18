function s(num) {
  return num < 2 ? ' ' : 's ';
}

module.exports = function(value) {
  var elapsed = (value && typeof value.getTime === 'function' ? value.getTime() : value),
      ts = [ 24*60*60, 60*60, 60, 1 ].map(function(div) {
        var count = Math.floor(elapsed / div);
        elapsed -= count * div;
        return count;
      });

  return (ts[0] > 0 ? ts[0] +' day' + s(ts[0]) : '') +
         (ts[1] > 0 ? ts[1] +' hour' + s(ts[1]) : '');
//         (ts[2] > 0 ? ts[2] +' minute' + s(ts[2]) : '') +
//         (ts[3] > 0 ? ts[3] +' second' + s(ts[3]) : '');
};
