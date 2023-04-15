const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed newArray based on the control sequences that original
 * newArray contains
 * 
 * @param {newArray} newArr initial newArray
 * @returns {newArray} transformed newArray
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error ("'arr' parameter must be an instance of the Array!");}
  let isCommand = false;
  let newArr = arr.slice();
  for( let i = 0; i < newArr.length; i++)
  {
    if(typeof newArr[i] === 'string' || newArr[i] instanceof String)
    {
      switch(newArr[i])
      {
        case '--discard-next':
          if(i < newArr.length-1) {newArr.splice(i+1, 1);}
          isCommand = true;
          break;
        case '--discard-prev':
          if(i >= 1){ newArr.splice(i-1, 1); i--; }
          isCommand = true;
          break;
        case '--double-next':
          if(i < newArr.length-1) {newArr.splice(i+1, 0, newArr[i+1])};
          isCommand = true;
          break;
        case '--double-prev':
          if(i >= 1 ){ newArr.splice(i-1, 0, newArr[i-1]); i++; }
          isCommand = true;
          break;
      }
      if(isCommand){
        newArr.splice(i, 1);
        i--;
        isCommand = false;
      }
    }
  }
  return newArr;
}

module.exports = {
  transform
};
