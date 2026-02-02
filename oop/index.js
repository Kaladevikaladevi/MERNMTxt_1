const HOD = require("./hod");

// Read CLI arguments
const args = process.argv.slice(2);

const data = {};
args.forEach(arg => {
  const [key, value] = arg.replace("--", "").split("=");
  data[key] = value;
});

const college = new HOD();

if (data.student) college.setStudent(data.student);
if (data.hod) college.setHod(data.hod);
if (data.college) college.setCollege(data.college);

console.log(college.info());
