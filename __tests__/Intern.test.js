const Intern = require('../lib/Intern');

test('get school', () => {
    const school = "schoolname";
    const employee = new Intern("Bob", 1, 'bob@email.com', school);
    expect(employee.getSchool()).toBe(school);
})

test('get role update', () => {
    const role = "Intern";
    const employee = new Intern("Bob", 1, 'bob@email.com', role);
    expect(employee.getRole()).toBe(role);
})