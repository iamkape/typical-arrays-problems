
exports.min = function min (array) {
   
  return Math.min.apply(null,array);
}

exports.max = function max (array) {    
    
  return Math.max.apply(null,array);
}}
exports.avg = function avg (array) {
    
    for(i=0; i<array.length; i++){
      let sum+=array[i];
       
    }
     return sum/array.length;
  
}
