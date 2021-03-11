
module.exports = function towelSort (matrix) {
  
 if (typeof matrix === 'undefined' || matrix.length == 0){
        return [];
      }else {
  for ( let i = 0; i < matrix.length; i++){
    if (i%2 == 1){
     matrix[i].reverse();
    } 
  }
    let arr =[];
  for (let i=0; i<matrix.length; i++){
  arr = arr.concat(matrix[i]);
  }
  return arr;
  }
}