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
function sortByHeight( arr ) {
  const digitInd = arr.reduce((acc, item, i) => item === -1 ? [...acc, i] : acc, []);
  console.log(digitInd);
  const sorted = arr.sort((a, b) => a - b).filter(el => el !== -1);
  const count = arr.length - sorted.length;
  for (let i = 0; i < digitInd.length; i++) {
    sorted.splice(digitInd[i], 0, -1)
  }
  return sorted;
}

module.exports = {
  sortByHeight
};
