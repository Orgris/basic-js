const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(tr, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;
  let result = ''
  for (let i = 1; i <= repeatTimes; i++) {
    result += tr
    for (let j = 1; j <= additionRepeatTimes; j++) {
      result += addition
      if (j !== additionRepeatTimes) {
        result += additionSeparator
      }
    }
    if (i !== repeatTimes) {
      result += separator
    }
  }
  return result
}

module.exports = {
  repeater
};
