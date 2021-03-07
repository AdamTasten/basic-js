module.exports = function repeater(str, options) {
  let partOfStr = "";
  finalStr = "";
  partOfStr += str;
  let arr = []
  //properties by default
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = "+";
  if (options.addition === undefined) options.addition = "";
  if (options.additionRepeatTimes === undefined)
  options.additionRepeatTimes = 1;
  if (options.additionSeparator === undefined) options.additionSeparator = "|";


  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    partOfStr += options.addition;
    if (i !== options.additionRepeatTimes)
      partOfStr += options.additionSeparator;
  }

  for (let i = 1; i <= options.repeatTimes; i++) {
    arr.push(partOfStr)
  }
  arr = arr.join(options.separator)
  return arr;
}