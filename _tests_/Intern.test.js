const Intern = require("../lib/Intern");

test("Enter school via constructor", () => {
  const testVal = "MIT";
  const employee = new Intern("Foo", 1, "test@test.com", testVal);
  expect(employee.school()).toEqual(testVal);
});

test('getRole() should return "Intern"', () => {
  const testVal = "Engineer";
  const employee = new Intern("Foo", 1, "test@test.com", "MIT");
  expect(employee.getRole()).toEqual(testVal);
});

test("Obtain school via getSchool", () => {
  const testVal = "MIT";
  const employee = new Intern("Foo", 1, "test@test.com", testVal);
  expect(employee.getSchool()).toEqual(testVal);
});
