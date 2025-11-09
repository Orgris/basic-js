const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new NotImplementedError('Not implemented');
  }
  const transformedArr = []
  const array = [...arr]

  array.forEach((element, index) => {
    switch (element) {
      case '--discard-next':
        if (array[index + 1]) {
          array[index + 1] = null;
        }
        break;

      case '--discard-prev':
        if (transformedArr[index - 1]) {
          transformedArr[index - 1] = null;
        }
        break;

      case '--double-next':
        if (array[index + 1]) {
          transformedArr.push(array[index + 1]);
        }
        break;

      case '--double-prev':
        if (array[index - 1]) {
          transformedArr.push(array[index - 1]);
        }
        break;

      default:
        transformedArr.push(array[index]);
        break;
    }
  })
  const result = transformedArr.filter((element) => element !== null)
  return result
}

module.exports = {
  transform
};
