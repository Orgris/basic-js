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
    this.isDirect = isDirect
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    return this.process(message, key, true)
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    return this.process(message, key, false)
  }

  process(message, key, encrypting) {
    message = message.toUpperCase()
    key = key.toUpperCase()

    let result = ''
    let keyIndex = 0
    const ACharCode = 'A'.charCodeAt(0)
    const alphabetLength = 26

    for (let i = 0; i < message.length; i++) {
      const char = message[i]
      if (char >= 'A' && char <= 'Z') {

        const charCode = char.charCodeAt(0) - ACharCode
        const shift = key[keyIndex % key.length].charCodeAt(0) - ACharCode

        let shiftedChar
        if (encrypting) {
          shiftedChar = (charCode + shift) % alphabetLength;
        } else {
          shiftedChar = (charCode - shift + alphabetLength) % alphabetLength
        }
        result += String.fromCharCode(shiftedChar + ACharCode)
        keyIndex++
      } else {
        result += char
      }
    }
    return this.isDirect ? result : result.split('').reverse().join('')
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
