const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let result = [];

  for (let items of members) {
    if (typeof items != "string") continue;

    let name = '';
    for (let i = 0; i <= items.length; i++) {
      if (items[i] == ' ') continue;
      
      name = name + items[i];
    };

    name = name.toUpperCase();
    result.push(name);
  };

  result = result.map(items => items[0][0]);
  return result.sort().join(''); 
};
