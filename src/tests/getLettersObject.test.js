import {getLettersObject} from '../helpers/helpers';

// test('"peace", ["array","eagle"]', () => {
//   const result = getLettersObject("peace", ['array', 'eagle']);
//   expect(result).toEqual({
//     "a": "contains", 
//     "r": "excluded", 
//     "y": "excluded", 
//     "e": "contains", 
//     "g": "excluded",
//     "l": "excluded"})
// })

// genre
// green, jambe, piggy

test('"genre", ["green, jambe, piggy"]', () => {
  const result = getLettersObject("genre", ['green', 'jambe', 'piggy']);
  expect(result).toEqual({
    "e": "matched",
    "g": "matched", 
    "r": "contains", 
    "n": "contains", 
    "y": "excluded",
    "i": "excluded",
    "p": "excluded",
    "a": "excluded",
    "j": "excluded",
    "b": "excluded",
    "m": "excluded"
  })
})