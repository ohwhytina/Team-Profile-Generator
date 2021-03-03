const Employee = require('../lib/Employee');

test('employee object', () => {
    const employee = new Employee('Dave', '12345', 'dave@dave.com');
    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('dave@dave.com');
});

test('get employee name', () => {
    const name = 'Bob';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);

});

test('get employee id', () => {
    const id = '5362748';
    const employee = new Employee("Bob", id);
    expect(employee.getId()).toBe(id);

});

test('get employee email', () => {
    const email = 'bob@email.com';
    const employee = new Employee("Bob", 1, email);
    expect(employee.getEmail()).toBe(email);

});

test('get employee role', () => {
    const role = 'Employee';
    const employee = new Employee("Bob", 1, "bob@email.com");
    expect(employee.getRole()).toBe(role);

});