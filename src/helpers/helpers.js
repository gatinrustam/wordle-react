export function getMatchedLettersArray(gameWord, currentWord) {
  const result = Array(5).fill('excluded');
  const letters = {};

  for (const letter of gameWord) {
    letters[letter] ??= 0;
    letters[letter]++;
  }

  for (let i = 0; i < currentWord.length; i++) {
    const currentLetter = currentWord[i];

    if (currentWord[i] === gameWord[i]) {
      if (letters[currentLetter] !== 0) {
        result[i] = 'matched';
        letters[currentLetter]--;
      }
    }
  }

  for (let i = 0; i < currentWord.length; i++) {
    const currentLetter = currentWord[i];

    if (currentWord[i] !== gameWord[i] && gameWord.includes(currentLetter)) {
      if (letters[currentLetter] !== 0) {
        result[i] = 'contains';
        letters[currentLetter]--;
      }
    }
  }

  return result;
}

export function generateKey(key, index) {
  return `key_${key}_${index}`;
}
