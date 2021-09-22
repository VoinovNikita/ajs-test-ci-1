import hero from '../../index';


test('1 check for xp', () => {
  const character = {
    name: 'Маг',
    health: 90,
  };
  const result = hero(character);

  const expected = 'healthy';
  expect(result).toBe(expected);
});


test('2 check for xp', () => {
  const character = {
    name: 'Маг',
    health: 30,
  };
  const result = hero(character);
  const expected = 'wounded';
  expect(result).toBe(expected);
});


test('3 check for xp', () => {
  const character = {
    name: 'Маг',
    health: 0,
  };
  const result = hero(character);

  const expected = 'critical';
  expect(result).toBe(expected);
});
