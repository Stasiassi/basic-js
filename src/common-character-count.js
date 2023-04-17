const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * 
 * 
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  s1 = Array.from(s1);
  s2 = Array.from(s2);
  for(let i = 0; i < s1.length; i++)
  {
    if (s2.includes(s1[i])) {
      count++;
      s2.splice(s2.indexOf(s1[i]), 1);
    }
  }  
  return count;
}

module.exports = {
  getCommonCharacterCount
};
