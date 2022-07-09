// child class
const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');
const manager = new Manager('bartholomeow', '87654321', 'barthie@email.com', '111');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('bartholomeow');
    expect(manager.id).toBe('87654321');
    expect(manager.email).toBe('barthie@email.com');
    expect(manager.officeNumber).toBe('111');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('bartholomeow');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('87654321');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('barthie@email.com');
});

test('test if we can get the office number from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('111');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

// link to employee class

// test office number

module.exports = function() {};