const chainMaker = {
  counter: 0,
  chain: "",
  chainCopy: "",
  chainElements: [],
  getLength() {
    return this.counter;
  },
  addLink(value) {
    this.counter++;
    if (value === undefined) {
      this.chainElements.push("");
      return this;
    }
    this.chainElements.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 0 ||
      position > this.counter
    ) {
      this.chainElements = [];
      this.counter = 0;
      throw new Error();
    } else {
      this.chainElements.splice(position - 1, 1);
      this.counter--;
      return this;
    }
  },
  reverseChain() {
    this.chainElements = this.chainElements.reverse();
    return this;
  },
  finishChain() {
    this.chain += "( " + this.chainElements[0] + " )";
    for (let i = 1; i < this.counter; i++) {
      this.chain += "~~( " + this.chainElements[i] + " )";
    }

    this.chainCopy = this.chain;
    this.chain = "";
    this.chainElements = [];
    this.counter = 0;
    return this.chainCopy;
  },
};



module.exports = chainMaker;