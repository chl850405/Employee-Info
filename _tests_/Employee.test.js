const Employee = require("../lib/Employee");

test("creates employee object", () => {
  const employee = new Employee();
  expect(typeof(employee)).toEqual(object);
});

test("Create name with contructor arguments", () => {
  const name = "";
  const employee = new Employee(name);
  expect(employee.name).toEqual(expect.any(String));
});

test("Create id via constructor argument", () => {
  const testVal = 100;
  const e = new Employee("Foo", testVal);
  expect(e.id).toEqual(testVal);
});

test("Get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toEqual(testValue);
});

test("Create email via getEmail()", () => {
  const testVal = "test@test.com";
  const employee = new Employee("Foo", 1, testValue);
  expect(employee.getEmail()).toEqual(testVal);
});

test("getRole() should return \"Employee\"", () => {
  const testVal = "Employee";
  const employee = new Employee("Trevor", 1, "test@test.com");
  expect(employee.getRole()).toEqual(testVal);
});
