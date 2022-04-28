const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
  var len=arr.length;
  var out=[];
  newArr=arr.filter((a)=>a!=-1);
  newArr.sort((a,b)=>a-b);
  var n=0;
  for (let i=0;i<len;i++){
    if(arr[i]==-1){out.push(-1)}
    else {
      out.push(newArr[n]);
      n++;
    }
  }
  return out
}

module.exports = {
  sortByHeight
};
