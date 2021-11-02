const Engineer = require("./lib/Engineer")

test('creates engineer object', () => {

    const engineer = new Engineer("name, id, email, github");

    expect(engineer.name).toEqual(expect.any(String))

    expect(engineer.id).toEqual(expect.any(String))

    expect(engineer.email).toEqual(expect.any(String))

    expect(engineer.github).toEqual(expect.any(String))
});