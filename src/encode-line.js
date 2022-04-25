const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
  if (str==''){return ''}
var out ="";
var n=1;
var letter=str[0];
len =str.length;
for (let i=1;i<len;i++){
  if (str[i]==letter){n++;}
  else{
    if (n==1){out+=str[i-1];letter=str[i]}
    if (n>1){out= out+ n.toString()+str[i-1]; letter=str[i];n=1}
  }
}
if (n==1){out+=str[len-1];}
if (n>1){out= out+ n.toString()+str[len-1]; }

return out
}

module.exports = {
  encodeLine
};
