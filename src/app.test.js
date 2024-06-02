const add = require('./app');

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});