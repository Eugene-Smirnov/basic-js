const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!'; 
  if (toString.call(date) != "[object Date]") throw Error; 

  date = date.getMonth();
  if (date < 2 || date == 11) return 'winter';
  if (date < 5) return 'spring';
  if (date < 8) return 'summer';
  if (date < 11) return 'autumn';
};
