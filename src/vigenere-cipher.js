const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    str = str.toUpperCase();
    key = key.toUpperCase();

    let res = '';
    let keyIndex = 0;

    for (let char of str) {
      if (char >= 'A' && char <= 'Z') {
        const chCode = char.charCodeAt(0) - 65;
        const keyCode = key[keyIndex % key.length].charCodeAt(0) - 65;
        const resChar = String.fromCharCode(((chCode + keyCode) % 26) + 65);

        res += resChar;
        keyIndex++;
      }
      else {
        res += char;
      }
    }
    return this.isDirect ? res : res.split('').reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    str = str.toUpperCase();
    key = key.toUpperCase();

    let res = '';
    let keyIndex = 0;

    for (let char of str) {
      if (char >= 'A' && char <= 'Z') {
        const chCode = char.charCodeAt(0) - 65;
        const keyCode = key[keyIndex % key.length].charCodeAt(0) - 65;
        const dec = String.fromCharCode(((chCode - keyCode + 26) % 26) + 65);
        res += dec;
        keyIndex++;
      } else {
        res += char;
      }
    }
    return this.isDirect ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
