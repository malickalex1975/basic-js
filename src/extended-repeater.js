const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  if (str!=null){
  str= new String(str);
  }
  var s='';
  var out="";
  var sep="";
  if (options.repeatTimes==undefined){ n=1;}
    else{n=options.repeatTimes}
  if (options.separator==undefined){ sep="+"}
    else{sep=options.separator}
  if (options.addition===undefined){ add=""}
    else{
      
          if (add!==null){add=new String(options.addition)}}
        
  if (options.additionRepeatTimes==undefined){var m=1;}
    else{m=options.additionRepeatTimes}
  if (options.additionSeparator==undefined){var sep2="|"}
    else {sep2=options.additionSeparator}
    add1=add;
   for (let i=1 ;i<m;i++){
     add1=add1+sep2+add;
   }
   s=str+add1;
   out=s;
   for (let i=1;i<n;i++){
    out=out+sep+s
   }
   return out
  }

module.exports = {
  repeater
};
