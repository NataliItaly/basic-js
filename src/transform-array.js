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
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  let isToDiscard = false;
  for (let i = 0; i < arr.length; i++) {
    if (isToDiscard) {
      isToDiscard = false;
      continue;
    }
    if (typeof arr[i] === 'number' && !isToDiscard) {
      res.push(arr[i]);
    }
    else {
      if (arr[i] === '--double-prev' && arr[i - 1] && typeof arr[i - 1] === 'number' && arr[i - 2] !== '--discard-next') {
        res.push(arr[i - 1]);
      }

      if (arr[i] === '--double-next' && arr[i + 1] && typeof arr[i + 1] === 'number') {
        res.push(arr[i + 1]);
      }
      if (arr[i] === '--discard-prev' && arr[i - 1] && typeof arr[i - 1] === 'number' && arr[i - 2] !== '--discard-next') {
        res.pop();
      }
      if (arr[i] === '--discard-next' && arr[i + 1] && typeof arr[i + 1] === 'number') {
        isToDiscard = true;
      }
    }
  }
  return res;
}

module.exports = {
  transform
};
