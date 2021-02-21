const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return false;
    let result = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        let item_depth = this.calculateDepth(item);
        if (result <= item_depth) {
          result = 1 + item_depth;
        } 
      }
    };
    return result;
  };
};