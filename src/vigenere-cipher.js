const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(straight=true){
      this.straight=straight;
    }


  encrypt(message,key) {
    if (message==undefined|| key== undefined ){
      throw new Error("Incorrect arguments!");}
      key=key.toLowerCase();
      message=message.toLowerCase();
      while (key.length<message.length){
        key+=key;
      }
      key= key.slice(0,message.length);
      key=key.split('');
      lst=[];
      message=message.split('');
      var j=-1;
      for (let i=0;i<message.length;i++){
       let m = message[i].charCodeAt(0);
        if(m<97 || m>122 ){lst.push(String.fromCharCode(m));}
            else{
              j++;
              let k= key[j].charCodeAt(0);
              let c=(m-97+k-97)%26+97;
              lst.push(String.fromCharCode(c))
            }
          }
      if (!this.straight){lst.reverse()}
      return lst.join('').toUpperCase()
    }

    
  

  decrypt(message,key) {
    if (message==undefined|| key==undefined ){
      throw new Error("Incorrect arguments!");
    }
    message= message.toLowerCase();
    key=key.toLowerCase();
    while (key.length<message.length){
      key+=key;
    }
    key= key.slice(0,message.length);
    key=key.split('');
    lst=[];
    message=message.split('');
    let j=-1;
    for (let i=0;i<message.length;i++){
    let  m = message[i].charCodeAt(0);
    let k= key[i].charCodeAt(0);
      if(m<97 || m>122 ){lst.push(String.fromCharCode(m))}
          else{
            j++;
            let k= key[j].charCodeAt(0);
            let c=((m-k+26))%26+97;
            lst.push(String.fromCharCode(c))
          }
        }
    if (!this.straight){lst.reverse()}
    return lst.join('').toUpperCase()
  }
  }


module.exports = {
  VigenereCipheringMachine
};
