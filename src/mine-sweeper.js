const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(arr) {
  var out=[];
   m = arr.length;
   n = arr[0].length;
  for(let j=0;j<m;j++){
    s1=[];
    for(let i=0;i<n;i++){s1[i]=0}
    out.push(s1);
  }
  for (let j=0;j<m;j++){
    x=0;
    for(let i=0;i<n;i++){
       x = arr[j-1][i]//+Boolean(arr[j+1][i+1])+Boolean(arr[j+1][i-1])+Boolean(arr[j][i+1])
      //+Boolean(arr[j][i-1])+!Boolean(arr[j-1][i])+Boolean(arr[j-1][i-1])+Boolean(arr[j-1][i+1] );
      
      out[j][i]=x;
    }
    
  }
  return out
}

module.exports = {
  minesweeper
};
