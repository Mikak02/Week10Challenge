// child class
const Intern = require('../lib/Intern');
const intern = new Intern('yoshi', '12345678', 'yoshi@email.com', 'Catston');

test('test if we can get the constructor values for the intern object', () => {
    expect(intern.name).toBe('yoshi');
    expect(intern.id).toBe('12345678');
    expect(intern.email).toBe('yoshi@email.com');
    expect(intern.school).toBe('Catston');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('yoshi');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('12345678');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('yoshi@email.com');
});

test('test if we can get the school from getSchool() method', () => {
    expect(intern.getSchool()).toBe('Catston');
});

test('test if we can get role from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});

//link to employee tests

// add test for role

