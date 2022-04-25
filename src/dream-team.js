const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members ) {
  var newMembers =[];
  
  if (members== null || typeof members=="number" || members==undefined 
  || members.length==0 || typeof members== "boolean"|| typeof members=='bigint'){return false}
  try{
  for (let m of  members){
    if (typeof m=="string"){
   m= m.trim().toUpperCase();
   newMembers.push(m);
    }
  }
  newMembers.sort();
  var dreamTeam="";
  for (let member of newMembers){
    if(true){
      dreamTeam = dreamTeam + member[0].toUpperCase();
    }
  }
  if (dreamTeam==""){
    return false
  }
  else{
  return dreamTeam
  }
}
catch(e){ return false}
}

module.exports = {
  createDreamTeam
};
