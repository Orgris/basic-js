const { NotImplementedError } = require('../lib');

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

function getCommonCharacterCount(s1, s2) {
  const s1Map = new Map()
  const s2Map = new Map()

  let result = 0

  s1.split('').forEach(char => {
    if (s1Map.has(char)) {
      const value = s1Map.get(char)
      s1Map.set(char, value + 1)
    } else {
      s1Map.set(char, 1)
    }
  });

  s2.split('').forEach(char => {
    if (s2Map.has(char)) {
      const value = s2Map.get(char)
      s2Map.set(char, value + 1)
    } else {
      s2Map.set(char, 1)
    }
  });

  s1Map.forEach((_, key) => {
    if (s2Map.has(key)) {
      const s1Char = s1Map.get(key)
      const s2Char = s2Map.get(key)
      if (s1Char >= s2Char) {
        result += s2Char
      } else {
        result += s1Char
      }
    }
  })
  return result
}

module.exports = {
  getCommonCharacterCount
};
