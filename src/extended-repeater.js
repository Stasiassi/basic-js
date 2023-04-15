const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {  
  function repeatFunction(separator = "+", repeatTimes = 1, addition = "" , additionSeparator = "|", additionRepeatTimes = 1, )
  {
    let temp = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition + separator;
    let result = str + temp;
    result = result.repeat(repeatTimes);
    result = result.slice(0,((result.length)-(separator.length)));
    return result;
  }
  return repeatFunction(options.separator, options.repeatTimes, options.addition, options.additionSeparator, options.additionRepeatTimes);
}

module.exports = {
  repeater
};
