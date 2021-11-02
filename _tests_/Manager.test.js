const Manager = require("./lib/Manger")

test('creates manager object', () => {

    const manager = new Manager("name, id, email, office");

    expect(manager.name).toEqual(expect.any(String))

    expect(manager.id).toEqual(expect.any(String))

    expect(manager.email).toEqual(expect.any(String))

    expect(manager.school).toEqual(expect.any(String))
});