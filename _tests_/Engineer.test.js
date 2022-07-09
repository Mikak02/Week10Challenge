// child class
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('sonic', '87654321', 'sonic@email.com', 'soniccodes');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('sonic');
    expect(engineer.id).toBe('87654321');
    expect(engineer.email).toBe('sonic@email.com');
    expect(engineer.gitHub).toBe('soniccodes');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('sonic');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('87654321');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('sonic@email.com');
});

test('test if we can get the github from getGitHub() method', () => {
    expect(engineer.getGitHub()).toBe('soniccodes');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});


// link to parent employee class

// test github

