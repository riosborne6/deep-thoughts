const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('create an Intern object', () => {
    const intern = new Intern('Buster');
});

test('get school info for intern', () => {
    const testSchool = 'bootCamp';
    const intern = new Intern('Buster', 1234, 'intern@yahoo.com', testSchool);

    expect(intern.school).toBe(testSchool);
});

test('get school info using function', () => {
    const testSchool = 'bootCamp';
    const intern = new Intern('Buster', 1234, 'intern@yahoo.com', testSchool);

    expect(intern.getSchool()).toBe(testSchool);
});

// test for role function
test('get role info using function', () => {
    const testRole = 'Intern';
    const intern = new Intern('Buster', 1234, 'intern@yahoo.com', 'bootCamp');

    // use function getRole to overwrite role
    expect(intern.getRole()).toBe(testRole);
})