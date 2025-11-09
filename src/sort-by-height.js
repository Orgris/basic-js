const { NotImplementedError } = require('../lib');

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
function sortByHeight(arr) {
  const sortedArr = arr.filter((element) => element !== -1).sort((a, b) => a - b)
  const negativeIndexes = arr.reduce((acc, element, index) => {
    if (element === -1) {
      acc.push(index);
    }
    return acc;
  }, []);

  negativeIndexes.forEach((negativeIndex) => {
    sortedArr.splice(negativeIndex, 0, -1);
  })
  return sortedArr
}

module.exports = {
  sortByHeight
};
