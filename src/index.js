
exports.min = function min (array) {
    for(i=0; i<array.length; i++){
        
  return Math.min(array[i]);
}}

exports.max = function max (array) {
   for(i=0; i<array.length; i++){
        
  return Math.max(array[i]);
}}
exports.avg = function avg (array) {
    
    for(i=0; i<array.length; i++){
      let sum+=array[i];return sum/array.length;
    }
    
  
}
