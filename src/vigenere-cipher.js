const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boolean) {
    this._message = '';
    this._key = '';

    if (boolean === true || boolean === undefined || boolean === '') {
      this._boolean = true;

    } else if (boolean === false) {
      this._boolean = false;

    } else {
      throw new Error
    };
  }

  _alphabet() {
    let alphabet = [];
    for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCodePoint(i));
    };
    return alphabet;
  }

  _AZfromChar(char) {
    let AZ = this._alphabet();
    let index = AZ.indexOf(char);
    let tail = AZ.splice(index, 26 - index + 1);
    return tail.concat(AZ);
  }

  encrypt(message, key) {
    if (!message || !key || typeof(message) !== "string" || typeof(key) !== "string") throw new Error;

    this._key = key.toUpperCase().split('');
    this._message = message.toUpperCase().split(''); 

    let result = [];
    let rubbishCount = 0;
    for (let i = 0; i <= this._message.length; i++) {
      
      let currentIndex = ((i + 1 - rubbishCount) % (key.length)) - 1;
      if (currentIndex === -1) currentIndex = key.length - 1;
      let keyChar = this._key[currentIndex];

      if (this._alphabet().indexOf(this._message[i]) === -1) {
        result.push(this._message[i]);
        rubbishCount++;
        continue
      };

      result.push(  this._AZfromChar(keyChar)[ this._alphabet().indexOf(this._message[i]) ]  )
    };

    this._message = '';
    this._key = '';

    if (!this._boolean) result.reverse();
    return result.join('');
  }    

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key || typeof(encryptedMessage ) !== "string" || typeof(key) !== "string") throw new Error;
    
    this._key = key.toUpperCase().split('');
    this._message = encryptedMessage.toUpperCase().split(''); 

    let result = [];
    let rubbishCount = 0;
    for (let i = 0; i <= this._message.length; i++) {
      let currentIndex = ((i + 1 - rubbishCount) % (key.length)) - 1;
      if (currentIndex === -1) currentIndex = key.length - 1;
      let keyChar = this._key[currentIndex];

      if (this._alphabet().indexOf(this._message[i]) === -1) {
        result.push(this._message[i]);
        rubbishCount++;
        continue
      };

      result.push(  this._alphabet()[ this._AZfromChar(keyChar).indexOf(this._message[i]) ]  )
    };
    
    this._message = '';
    this._key = '';

    if (!this._boolean) result.reverse();
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;
