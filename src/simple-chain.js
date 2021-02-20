const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) this.chain.push(`~( )~`);

    this.chain.push(`~( ${value} )~`);
    return this;
    },

  removeLink(position) {
    if (+position == undefined || isNaN(+position) || !Number.isInteger(position) || this.chain[position - 1] == undefined) {
      this.chain = [];
      throw Error;
    };
    
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain;
    this.chain = [];
    result[0] = result[0].slice(1)
    result[result.length - 1] = result[result.length - 1].slice(0, result[result.length - 1].length - 1)
    result = result.join('');
    return result;
  }
};

module.exports = chainMaker;
