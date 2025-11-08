const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
]
minesweeper(matrix)

function minesweeper(matrix) {
  const rows = matrix.length
  const colums = matrix[0].length
  let resultArr = []

  for (let i = 0; i < rows; i++) {
    resultArr.push(new Array(colums).fill(0))
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < colums; col++) {
      if (matrix[row][col]) {
        if (resultArr[row][col + 1] !== undefined) resultArr[row][col + 1] += 1
        if (resultArr[row][col - 1] !== undefined) resultArr[row][col - 1] += 1

        if (resultArr[row + 1] !== undefined) {
          if (resultArr[row + 1][col] !== undefined) {
            resultArr[row + 1][col] += 1
          }
          if (resultArr[row + 1][col + 1] !== undefined) {
            resultArr[row + 1][col + 1] += 1
          }
          if (resultArr[row + 1][col - 1] !== undefined) {
            resultArr[row + 1][col - 1] += 1
          }
        }

        if (resultArr[row - 1] !== undefined) {
          if (resultArr[row - 1][col] !== undefined) {
            resultArr[row - 1][col] += 1
          }
          if (resultArr[row - 1][col - 1] !== undefined) {
            resultArr[row - 1][col - 1] += 1
          }
          if (resultArr[row - 1][col + 1] !== undefined) {
            resultArr[row - 1][col + 1] += 1
          }
        }
      }
    }
  }
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < colums; col++) {
      if (matrix[row][col]) {
        resultArr[row][col] = 1
      }
    }
  }
  return resultArr
}

module.exports = {
  minesweeper
}
