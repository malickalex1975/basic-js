const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  out ={};
  if (domains==[]){return {}}
  for (let domain of domains){
    lst= domain.split(".");
    len=lst.length;
    var a="";
    for (let i=len-1;i>=0;i--){
       a=a+`.${lst[i]}`
      if (a in out){out[a]=out[a]+1}
      else{out[a]=1}
    }
  }
return out
}

module.exports = {
  getDNSStats
};
