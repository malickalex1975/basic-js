const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  var lst= s1.split('');var count=0;
  for (letter of s2){
    var n= lst.indexOf(letter);
    if(n!=-1){
      lst[n]="*";
      count++;
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
