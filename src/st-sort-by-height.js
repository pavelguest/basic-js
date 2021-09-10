import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arrForNumber = [];
  const arrSort = arr;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== -1) {
      arrForNumber.push(arr[index]);
    }
  }
  arrForNumber = arrForNumber.sort((a, b) => a - b);

  let a = o;
  for (let i = 0; i < arrSort.length; i++) {
    if (arr[i] !== -1) {
      arrSort[i] = arrForNumber[a];
    }
  }
  return arrSort;
}
