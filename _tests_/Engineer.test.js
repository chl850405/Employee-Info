const Engineer = require("../lib/Engineer");

test("Enter GitHub account via constructor", () => {
const testVal = "githubUser";
const employee = new Engineer("Trevor", testVal);
expect(employee.gethub()).toEqual(testVal);
});

test('getRole() should return "Engineer"', () => {
const testVal = "Engineer";
const employee = new Engineer("Trevor", 1, "trevor1@gmail.com", "githubUser");
expect(employee.getRole()).toEqual(testVal);
});

    test("Obtain Github username via getGithub", () => {
    const testVal = "githubUser";
    const employee = new Engineer("Trevor", 1, testVal);
    expect(employee.getGithub()).toEqual(testVal);
    });