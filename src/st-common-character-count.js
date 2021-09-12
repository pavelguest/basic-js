import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let sum = 0;

  if (s1.length > s2.length) {
    arr1.forEach(i => {
      if (arr2.includes(i)) {
        arr2.splice(arr2.indexOf(i), 1);
        sum += 1;
      }
    });
  } else {
    arr2.forEach(j => {
      if (arr1.includes(j)) {
        arr1.splice(arr1.indexOf(j), 1);
        sum += 1;
      }
    });
  } return sum;
}
