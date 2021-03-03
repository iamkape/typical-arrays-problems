
exports.min = function min (array) {
    
  return array.min();
}

exports.max = function max (array) {
  return array.max();
}

exports.avg = function avg (array) {
    
    for(i=0; i<array.length; i++){
      let sum+=array[i];
    }
    return sum/array.length;
  return 0;
}
