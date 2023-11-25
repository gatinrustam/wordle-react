import {getMatchedLettersArray} from '../helpers/helpers';

test('gameWord = abcde, currentWord = bucaw', () => {
  const result = getMatchedLettersArray("ABCDE", "BUCAW");
  expect(result).toEqual(["contains", "excluded", "matched", "contains", "excluded"])
})

test('gameWord = abbab, currentWord = aaxxx', () => {
  const result = getMatchedLettersArray('abbab', 'aaxxx')
  expect(result).toEqual(["matched", "contains", "excluded", "excluded", "excluded"])
})

// peace => sport greed eagle award salad 
test('gameWord = peace, currentWord = sport', () => {
  const result = getMatchedLettersArray('peace', 'sport')
  expect(result).toEqual(["excluded", "contains", "excluded", "excluded", "excluded"])
})

test('gameWord = peace, currentWord = greed', () => {
  const result = getMatchedLettersArray('peace', 'greed')
  expect(result).toEqual(["excluded", "excluded", "contains", "contains", "excluded"])
})

test('gameWord = peace, currentWord = eagle', () => {
  const result = getMatchedLettersArray('peace', 'eagle')
  expect(result).toEqual(["contains", "contains", "excluded", "excluded", "matched"])
})

test('gameWord = peace, currentWord = award', () => {
  const result = getMatchedLettersArray('peace', 'award')
  expect(result).toEqual(["excluded", "excluded", "matched", "excluded", "excluded"])
})

test('gameWord = peace, currentWord = salad', () => {
  const result = getMatchedLettersArray('peace', 'salad')
  expect(result).toEqual(["excluded", "contains", "excluded", "excluded", "excluded"])
})