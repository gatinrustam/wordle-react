import { getMatchedLettersArray } from "../helpers/helpers";

export function KeyboardRow({words, gameWord, row, onLetterPress, onEnterPress}) {
  // 'peace'
  // ['sport', 'eagle'] => []

  const matchedLetters = words.flatMap(word => {
    return [...getMatchedLettersArray(gameWord, word)];
  })

  const excludedLetter = Array.from(words.join('')).map((letter, index) => {
    return {
      letter: letter,
      status: matchedLetters[index],
    }
  }).filter(item => item.status === 'excluded');

  console.log('>>', excludedLetter);

  return Array.from(row).map(key => (
    <button 
      type="button" 
      key={key}
      className={excludedLetter.some(item => item.letter === key) ? 'keyboard__key keyboard__key--excluded' : 'keyboard__key'}
      onClick={() => onLetterPress(key)}
    >{key}</button>
  ))
}