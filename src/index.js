
exports.min = function min (array) {
   if(array == undefined || array == 0){
       return 0
   } 
    else 
       {
  return Math.min.apply(null,array);
}
}
exports.max = function max (array) {    
    if (array== 0 || array== undefined){
        return 0
    }
    else {
  return Math.max.apply(null,array);
}
}

exports.avg = function avg (array) {
    
    for(i=0; i<array.length; i++){
      let sum+=array[i];
       
    }
     return sum/array.length;
  
}
