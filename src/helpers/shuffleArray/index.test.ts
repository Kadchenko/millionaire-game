import shuffleArray from './index';

test('shuffleArray', () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  expect(shuffleArray(arr)).not.toEqual(arr);
});
