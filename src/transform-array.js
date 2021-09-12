import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return [];

  let result = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === '--discard-next') {
      if (index !== arr.length - 1) {
        index += 1;
      }
    } else if (arr[index] === '--discard-prev') {
      if (index !== 0 && arr[index -2] !== '--discard-next') {
        result.pop();
      }
    } else if (arr[index] === '--double-next') {
      if (index !== arr.length - 1) {
        result.push(arr[index + 1]);
      }
    } else if (arr[index] === '--double-prev') {
      if (index !== 0 && arr[index - 2] !== '--discard-next') {
        result.push(arr[index - 1]);
      }
    } else result.push(arr[index]);
}
return result;
}
