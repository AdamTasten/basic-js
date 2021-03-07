module.exports = function countCats(args) {
  let numberOfCats = 0;
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (args[i][j] === "^^") {
        numberOfCats++;
      }
    }
  }
  return numberOfCats;
}