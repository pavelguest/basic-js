import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let sum = 0;
    let n = 0;

      sum += 1;
      for (let index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index])) {
          n = this.calculateDepth(arr[index]) + 1;
          if (sum < n) sum = n;
        }

      }
      return sum;
  }
}
