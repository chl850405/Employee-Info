const Manager = require("./lib/Manger");
const Employee = require("../lib/Employee");


test("Create office number via constructor argument", () => {
  const testVal = 100;
  const employee = new Manager("Foo", 1, "test@test.com", testVal);
  expect(employee.officeNumber).toEqual(testVal);
});

test('getRole() should return "Manager"', () => {
  const testVal = "Manager";
  const employee = new Mananger("Foo", 1, "test@test.com", 100);
  expect(employee.getRole()).toEqual(testVal);
});

test("Obtain office number via getOffice()", () => {
  const testVal = 100;
  const employee = new Manager("Foo", 1, "test@test.com", testVal);
  expect(employee.getOfficeNumber()).toEqual(testVal);
});