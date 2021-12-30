const Employee = require("../lib/Employee");

test("creates employee object", () => {
  const employee = new Employee("employee");

  expect(typeof(employee)).toEqual(employee);
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// test("Get employee name", () => {
//   const employee = new Employee("Trevor");
//   expect(employee.name).toEqual(expect.any(String));
// });


// test("Get employee id", () => {
//   const employee = new Employee("Trevor", 85);
//   expect(employee.getId()).toEqual(testValue);
// });

// test('gets employee email', () => {
//   const employee = new Employee("Trevor", 85, "trevor1@gmail.com");
//   expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
// });

// test("get employee role", () => {
//   const employee = new Employee("Trevor", 85, "trevor1@gmail.com");
//   expect(employee.getRole()).toEqual("Employee");
// });
