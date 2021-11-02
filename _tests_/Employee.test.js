const Employee = require("./lib/Employee")

test('creates employee object', () => {

    const employee = new Employee("name, id, email");

    expect(employee.name).toEqual(expect.any(String))

    expect(employee.id).toEqual(expect.any(String))

    expect(employee.email).toEqual(expect.any(String))
});