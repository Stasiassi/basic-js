const { NotImplementedError } = require('../extensions/index.js');

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
function sortByHeight(a) {
  let temp = 0;
  for(let i = 0; i < a.length-1; i++)
  {
    if(a[i] == -1){ continue; }
    for(let j=i+1; j<a.length; j++)
    {
      if(a[j] == -1 || a[j]>a[i]){continue;}
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
  }
  return a;
}

module.exports = {
  sortByHeight
};
