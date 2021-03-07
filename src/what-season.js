module.exports = function getSeason(date) {
  if (typeof date === "undefined")
    return "Unable to determine the time of year!";
  if (!date instanceof Date || isNaN(date.valueOf())) throw new Error();

  if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1)
    return "winter";
  else if (2 <= date.getMonth() && date.getMonth() <= 4) return "spring";
  else if (5 <= date.getMonth() && date.getMonth() <= 7) return "summer";
  else if (8 <= date.getMonth() && date.getMonth() <= 10) return "fall";
}