const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix ) {
  var sum=0;
 var m = matrix.length;
 var n = matrix[0].length;
  for (let i=0;i<n;i++){
    sum=sum+matrix[0][i];
  }
  for (let j=1;j<m;j++){
    for (let i=0;i<n;i++){
      if (matrix[j-1][i]!=0){
        sum =sum+matrix[j][i]
      }
    }
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
