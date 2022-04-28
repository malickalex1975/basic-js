const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {
   chain: [],
 
  getLength() {
 this.chain.length;
 return this
    
  },
  addLink (value='') {
    var link=`(${value})`
    this.chain.push(link);
    return this
    
  },
  removeLink(position) {
    if (!Number.isInteger(position) || typeof position !=Number || position<0 
    ||position>this.chain.length  ){this.chain=undefined; throw new Error("You can't remove incorrect link!");}
    
    this.chain.splice(position,1)
    return this
    
    
    
  },
  reverseChain(){
    this.chain.reverse();
    return this
    
  },
  finishChain(){
    const copy=this.chain;
    this.chain=undefined;
    return copy.join("~~"); 
  }
};

module.exports = {
  chainMaker
};
