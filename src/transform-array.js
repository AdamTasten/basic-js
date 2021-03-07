module.exports = function transform(arr) {
  let arrTransformed = [];
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case "--discard-next":
          i++;
          break;
        case "--discard-prev":
          if (arr[i-2] === "--discard-next") break;
          arrTransformed.pop();
          break;
        case "--double-next":
          if (arr.length - i === 1) break;
          arrTransformed.push(arr[i + 1]);
          break;
        case "--double-prev":
          if (i === 0) break;
          if (arr[i-2] === "--discard-next") break;
          arrTransformed.push(arr[i - 1]);
          break;
        default:
          arrTransformed.push(arr[i]);
          break;
      }
    }
  return arrTransformed;
}