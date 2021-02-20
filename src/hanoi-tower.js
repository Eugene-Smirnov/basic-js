const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  return { turns: (2 ** disksNumber - 1), seconds: Math.floor((3600 * (2 ** disksNumber - 1)) / turnsSpeed )};
};
