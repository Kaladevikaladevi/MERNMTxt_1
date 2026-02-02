class Student {
  constructor() {
    this.studentName = "";
    this.collegeName = "";
  }

  setStudent(name) {
    this.studentName = name;
  }

  setCollege(name) {
    this.collegeName = name;
  }
}

module.exports = Student;
