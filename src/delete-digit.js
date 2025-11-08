const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
deleteDigit(152)
function deleteDigit(n) {
  const nArray = String(n).split('')

  let maxNum = nArray.reduce((max, _, index) => {
    const number = [...nArray]
    number[index] = ''
    const newNumber = number.join('')
    if (parseInt(newNumber) > max) {
      max = parseInt(newNumber)
    }
    return max
  }, 0);
  return maxNum
}

module.exports = {
  deleteDigit
};
