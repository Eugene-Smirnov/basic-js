const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // STANDARDISING & CHECKING INPUTS
  if (str === undefined) throw new Error;

  str = String(str);

  let addition = '';
  if (options.addition !== undefined) addition = String(options.addition);

  let repeatTimes = 1;
  if (options.repeatTimes != undefined) repeatTimes = options.repeatTimes;

  let additionRepeatTimes = 1;
  if (options.additionRepeatTimes != undefined) additionRepeatTimes = options.additionRepeatTimes;

  let separator = '+';
  if (options.separator != undefined) separator = String(options.separator);

  let additionSeparator = '|';
  if (options.additionSeparator != undefined) additionSeparator = String(options.additionSeparator);

  let result = [];

  // STR + ADDITION & ADDITION REPEATS
  for (let i = 1; i <= additionRepeatTimes; i++) {
    str = str + addition;
    if (i < additionRepeatTimes) str = str + additionSeparator;
  };

  // STR + SEPARATOR & REPEATS
  for (let j = 1; j <= repeatTimes; j++) {
    (j < repeatTimes) ? result.push(str + separator) : result.push(str);
  }

  return result.join('');
};
  