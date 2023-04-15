const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {

  calculateDepth(arr)  {
    let deep = 0;
    if(Array.isArray(arr))
    {
      for(var item in arr)
      {
        deep = Math.max(deep,this.calculateDepth(arr[item]));
      }
      deep++;
    }
  return deep;
  }
}

module.exports = {
  DepthCalculator
};