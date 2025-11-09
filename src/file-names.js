const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [...names]
  const fileSet = new Set()

  result.forEach((element, index) => {
    if (fileSet.has(element)) {
      let count = 1
      let newElement = element
      while (fileSet.has(newElement)) {
        newElement = `${element}(${count})`
        count += 1
      }
      result[index] = newElement
      fileSet.add(newElement)
    } else {
      fileSet.add(element)
    }
  })
  return result
}

module.exports = {
  renameFiles
};
