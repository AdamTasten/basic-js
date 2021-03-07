module.exports = function createDreamTeam(members) {
  if (typeof members !== "object" || members == null || typeof members[0] === "undefined") return false;
  let teamName = "";
  for (let i=0; i < members.length; i++){
    if (typeof members[i] === "string" && members[i][0] !== " ") teamName += members[i][0];
    if (typeof members[i] === "string" && members[i][0] === " "){
      for (let j=0; j < members[i].length; j++){
        if (members[i][j] !== " ") 
        {
          teamName += members[i][j];
          break;
        }
      }
    }
  }
  return teamName.toUpperCase().split("").sort().join("");
};