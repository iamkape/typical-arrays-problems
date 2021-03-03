
exports.min = function min (array) {
    
  return Math.min(...array);
}

exports.max = function max (array) {
  return Math.max(...array);
}

exports.avg = function avg (array) {
    
    for(i=0; i<array.length; i++){
      let sum+=array[i];
    }
    return sum/array.length;
  
}
