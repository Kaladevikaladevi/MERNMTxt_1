const HOD = require("../hod");

test("HOD info should return formatted output", () => {
  const hod = new HOD();
  hod.setStudent("Anu");
  hod.setHod("Ravi");
  hod.setCollege("ABC");

  expect(hod.info()).toBe(
`Student: Anu
HOD: Ravi
College: ABC`
  );
});
