const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n ) {
  n=n.toString();
   var len=n.length;
   var lst=[];
   for(let i=0;i<len;i++){
     a=n.slice(0,i)+n.slice(i+1)
     lst.push(a);
   }
      var lst2=[];
     for (let s of lst){
       lst2.push(parseInt(s))
     }
     lst2.sort((a,b)=>a-b);
     return lst2[len-1]
   }
  


module.exports = {
  deleteDigit
};
