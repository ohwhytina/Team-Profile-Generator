const Engineer = require('../lib/Engineer');

test('get github account', () => {
    const git = "githubusername";
    const employee = new Engineer("Bob", 1, 'bob@email.com', git);
    expect(employee.getGithub()).toBe(git);
})

test('get role update', () => {
    const role = "Engineer";
    const employee = new Engineer("Bob", 1, 'bob@email.com', role);
    expect(employee.getRole()).toBe(role);
})