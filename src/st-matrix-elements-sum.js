import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;

  for (let index = 0; index < matrix.length; index++) {
    for (let j = 0; j < matrix[index].length; j++) {
      if (index === 0) {
        sum += matrix[index][j];
      } else if (index > 0 && matrix[index - 1][j] !== 0) {
        sum += matrix[index][j];
    }
  }

  }
  return sum;
}
