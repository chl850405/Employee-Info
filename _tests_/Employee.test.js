const Employee = require("../lib/Employee");

test("creates employee object", () => {
  const employee = new Employee();
  const name = "Trevor";
  const testValue = 100;
  const testEmail = "trevor1@gmail.com"
  const e = new Employee(name);
  const emp = new Employee("Trevor", testValue);
  const employ = new Employee("Trevor", 1, testEmail);

  expect(typeof(employee)).toEqual("object");
  expect(e.name).toEqual(name);
  expect(emp.id).toEqual(testValue);
  expect(employ.email).toEqual(testEmail);
});

test("Get employee name", () => {
  const name = "Trevor";
  const employee = new Employee("Trevor");
  expect(employee.name).toEqual(name);
});


test("Get employee id", () => {
  const testValue = 100;
  const employee = new Employee("Trevor", testValue);
  expect(employee.getId()).toEqual(testValue);
});

test('gets employee email', () => {
  const testEmail = "trevor1@gmail.com";
  const employee = new Employee("Trevor", testEmail);
  expect(employee.getEmail()).toEqual(employee.testValue);
});

test("get employee role", () => {
  const testValue = "Employee";
  const employee = new Employee("Trevor", 85, "trevor1@gmail.com");
  expect(employee.getRole()).toEqual(testValue);
});
