//parent class
const Employee = require('../lib/Employee');
const employee = new Employee('mika', '12345678', 'mika@email.com');

test('test if we can get the constructor values for the employee object', () => {
  expect(employee.name).toBe('mika');
  expect(employee.id).toBe('12345678');
  expect(employee.email).toBe('mika@email.com');
});

test('test if we can get the name from the getName() method', () => {
  expect(employee.getName()).toBe('mika');
});

test('test if we can get the id from the getId() method', () => {
  expect(employee.getId()).toBe('12345678');
});

test('test if we can get email from getEmail()method', () => {
  expect(employee.getEmail()).toBe('mika@email.com');
});

test('test if we can get the role from the getRole() method', () => {
  expect(employee.getRole()).toBe('Employee')
});

//test name
// test('creates an employee object', () => {
//     const employee = new Employee('name');
  
//     expect(this.name).toBe('name');
//   });
//test id

// test email



