const { NotImplementedError } = require('../lib');

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
function getMatrixElementsSum(matrix) {
  const rows = matrix.length
  const colums = matrix[0].length
  let sum = 0

  for (let col = 0; col < colums; col++) {
    for (let row = 0; row < rows; row++) {
      const element = matrix[row][col];
      if (element === 0) {
        break
      }
      sum += element
    }
  }
  return sum
}
module.exports = {
  getMatrixElementsSum
};
