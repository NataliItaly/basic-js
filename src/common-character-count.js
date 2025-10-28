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
  const indexes = [];
  let count = 0;
  for (let char of s1) {
    for (let j = 0; j < s2.length; j += 1) {
      if (char === s2[j] && !indexes.includes(j)) {
        count += 1;
        indexes.push(j);
        break;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
