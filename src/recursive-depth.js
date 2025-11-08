const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 1
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = Math.max(result, 1 + this.calculateDepth(arr[i]));
      }
    }
    return result
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
