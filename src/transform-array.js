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

  let result = arr.filter(i => i != '--discard-next' && i != '--discard-prev' && i != '--double-next' && i != '--double-prev');

  for (let index = 0; index < arr.length; index++) {
    if (arr[index - 1] === '--discard-next') {
      result.pop(arr[index]);

    } else if (arr[index + 1] === '--discard-prev') {
      result.pop(arr[index]);

    }
    if (arr[index + 1] === '--double-next') {
      result.push(arr[index]);

    } else if (arr[index - 1] === '--double-prev') {
      result.push(arr[index]);

    }
  }
  return result;
}
