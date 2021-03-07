module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthArr = [];//массив хранит значения глубины каждого элемента 

    for (let i = 0; i < arr.length; i++) {
      depthArr[i] = 1;
      if (Array.isArray(arr[i])) {
        depthArr[i] += this.calculateDepth(arr[i]);
      }
    }
    if (arr.length === 0) return 1;
    let max = depthArr[0];
    for (let i = 0; i < depthArr.length; i++) {
      if (depthArr[i] > max) max = depthArr[i];
    }
    return max;
  }
}