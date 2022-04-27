const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
  const symbols='ABCDEF1234567890'
  if(n.length!=17){return false}
  if (n[2]!="-"|| n[5]!="-"||n[8]!="-"||n[11]!="-"||n[14]!="-"){return false}
  s=n.split("-");
  if (s.length!=6){return false}
  for(a of s){
    if (a.length!=2){return false}
    if (!symbols.includes(a[0])){return false}
    if (!symbols.includes(a[1])){return false}
  }
return true
}
module.exports = {
  isMAC48Address
};
