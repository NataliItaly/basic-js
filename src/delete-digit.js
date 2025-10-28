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
function deleteDigit(n) {
  const mapArr = String(n).split('').map((el, i, arr) => Number((arr.slice(0, i).concat(arr.slice(i + 1))).join('')));
  return Math.max(...mapArr);
}

module.exports = {
  deleteDigit
};
