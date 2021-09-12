import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 1;
  let n = '';
  for (let index = 0; index < str.length; index++) {
    if (str[index] === str[index - 1]) {
      sum++
    } else {
      n = sum + str[index - 1];
      sum = 1;
    }
  } return n;
}
