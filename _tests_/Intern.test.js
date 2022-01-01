const Intern = require("../lib/Intern");

test("Enter school via constructor", () => {
  const testVal = "MIT";
  const employee = new Intern("Trevor", 1, "trevor1@gmail.com", testVal);
  expect(employee.school()).toEqual(testVal);
});

test('getRole() should return "Intern"', () => {
  const testVal = "Intern";
  const employee = new Intern("Trevor", 1, "trevor1@gmail.com", "MIT");
  expect(employee.getRole()).toEqual(testVal);
});

test("Obtain school via getSchool", () => {
  const testVal = "MIT";
  const employee = new Intern("Trevor", 1, "trevor1@gmial.com", testVal);
  expect(employee.getSchool()).toEqual(testVal);
});
