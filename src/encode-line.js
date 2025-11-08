const { NotImplementedError } = require('../lib');

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
encodeLine('aabbbc')
function encodeLine(str) {
  let result = ''
  let currentChar = str[0]
  let count = 0
  for (let i = 0; i <= str.length; i++) {
    if (currentChar === str[i]) {
      count += 1
    } else {
      if (count === 1) {
        result += currentChar
      } else {
        result += count + currentChar
      }
      currentChar = str[i]
      count = 1
    }
  }
  return result
}

module.exports = {
  encodeLine
};
