class VigenereCipheringMachine {
  constructor(flag) {
    //(true) and () - direct, (false) - reverse
    if (flag === undefined) flag = true;
    this.flag = flag;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    } else {
      let output = "";
      message = message.toUpperCase();
      key = key.toUpperCase();
      let j = 0;
      for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
          output += String.fromCharCode(
            ((message.charCodeAt(i) + key.charCodeAt(j)) % 26) + 65
          );
          j++;
          if (j === key.length) j = 0;
        } else output += message[i];
      }
      if (!this.flag) output = output.split("").reverse().join("");
      return output;
    }
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error();
    } else {
      let output = "";
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();
      let j = 0;
      for (let i = 0; i < encryptedMessage.length; i++) {
        if (
          encryptedMessage.charCodeAt(i) >= 65 &&
          encryptedMessage.charCodeAt(i) <= 90
        ) {
          output += String.fromCharCode(
            ((encryptedMessage.charCodeAt(i) - key.charCodeAt(j) + 26) % 26) +
              65
          );
          j++;
          if (j === key.length) j = 0;
        } else output += encryptedMessage[i];
      }
      if (!this.flag) output = output.split("").reverse().join("");
      return output;
    }
  }
}

module.exports = VigenereCipheringMachine;
