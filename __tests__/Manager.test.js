const Manager = require('../lib/Manager');

test('get phone number', () => {
    const phone = "2841931234";
    const employee = new Manager("Bob", 1, 'bob@email.com', phone);
    expect(employee.getofficeNumber()).toBe(phone);
})

test('get role update', () => {
    const role = "Manager";
    const employee = new Manager("Bob", 1, 'bob@email.com', role);
    expect(employee.getRole()).toBe(role);
})