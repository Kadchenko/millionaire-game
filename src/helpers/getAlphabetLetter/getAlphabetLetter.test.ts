import index from './index';

test('getAlphabetLetter', () => {
  expect(index(0)).toBe('a');
  expect(index(1)).toBe('b');
  expect(index(25)).toBe('z');
  expect(index(26)).toBe('');
}); // <-- add a space between the parentheses and the curly brace  (this is a common style convention)
