// palindrome.test.js

const { isPalindromeNumber } = require('./Palindrome');

test('Positive palindrome number', () => {
    expect(isPalindromeNumber(121)).toBe(true);
});

test('Single digit number', () => {
    expect(isPalindromeNumber(7)).toBe(true);
});

test('Negative number', () => {
    expect(isPalindromeNumber(-121)).toBe(false);
});

test('Non-palindrome number', () => {
    expect(isPalindromeNumber(123)).toBe(false);
});

test('Large palindrome number', () => {
    expect(isPalindromeNumber(1234321)).toBe(true);
});
