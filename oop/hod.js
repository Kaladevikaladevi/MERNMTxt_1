const Student = require("./student");

class HOD extends Student {
  constructor() {
    super(); // calls parent constructor
    this.hodName = "";
  }

  setHod(name) {
    this.hodName = name;
  }

  info() {
    return `Student: ${this.studentName}
HOD: ${this.hodName}
College: ${this.collegeName}`;
  }
}

module.exports = HOD;
