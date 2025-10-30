const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = Array.from({length: matrix.length}, () => Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        newMatrix[i][j] = 1;
      }
      else {

        let count = 0;
        if (matrix[i][j - 1] && matrix[i][j - 1] === true  ) count++;
        if (matrix[i][j + 1] && matrix[i][j + 1] === true  ) count++;
        if (i > 0 && j > 0 && matrix[i - 1][j - 1] === true  ) count++;
        if (i > 0 && matrix[i - 1][j] === true  ) count++;
        if (i > 0 && j + 1 < matrix[i - 1].length && matrix[i - 1][j + 1] === true  ) count++;
        if (i + 1 < matrix.length && j > 0 && matrix[i + 1][j - 1] === true  ) count++;
        if (i + 1 < matrix.length && matrix[i + 1][j] === true  ) count++;
        if (i + 1 < matrix.length && j + 1 < matrix[i + 1].length && matrix[i + 1][j + 1] === true  ) count++;
        console.log('count', count)
        newMatrix[i][j] = count;
      }
    }
  }
  console.log(newMatrix)
  return newMatrix
}

module.exports = {
  minesweeper
};
