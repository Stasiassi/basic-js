const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let flag = 1;
  let result = '';
  for (let i = 0; i < str.length; i++)
    {
      if(str[i] == str[i+1]){flag++;}
      else if ((str[i] != str[i+1]) && flag != 1) {result += String(flag)+str[i]; flag = 1;}
      else if (flag == 1) {result += str[i]; flag = 1;}
    }
  return result;
}

module.exports = {
  encodeLine
};
