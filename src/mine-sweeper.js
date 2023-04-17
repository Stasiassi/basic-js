const { NotImplementedError } = require('../extensions/index.js');

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

  let m = ([i, j]) => 
  [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];
  let answer = matrix.map((r) => r.map((_) => 0));

  for (let i = 0; i < matrix.length; i++) 
  {
    for (let j = 0; j < matrix[i].length; j++) 
    {
      if (matrix[i][j]) 
      {
        let temp = m([i, j]);
        for (let k = 0; k < 8; k++) 
        {
          if (
            temp[k][0] >= 0 &&
            temp[k][1] >= 0 &&
            temp[k][0] < matrix.length &&
            temp[k][1] < matrix[i].length
          ) 
          {
            answer[temp[k][0]][temp[k][1]]++;
          }
        }
      }
    }
  }

  return answer;
}

module.exports = {
  minesweeper
};
