const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
   arr: new Array(),
 
  getLength() {
 
 return this.arr.length;
    
  },
  addLink(value) {
    var link=`( ${value} )`;
    this.arr.push(link);
    return this
    
    
  },
  removeLink(position) {
    if ( typeof position !== "number" || position<=0 
    ||position>this.arr.length  ){this.arr=[];
       throw new Error("You can't remove incorrect link!");}
    
    this.arr.splice(position-1,1)
    return this
    
    
    
    
    
  },
  reverseChain(){
    this.arr.reverse();
    return this
    
    
    
  },
  finishChain(){
    const copy=this.arr;
    this.arr=[];
    return copy.join("~~"); 
  }
};

module.exports = {
  chainMaker
};
