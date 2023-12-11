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

// const colors = [
//   { letter: "A", color: "green" },
//   { letter: "B", color: "gray" },
//   { letter: "C", color: "yellow" },
//   { letter: "D", color: "gray" },
//   { letter: "E", color: "green" },
//   { letter: "A", color: "yellow" },
//   { letter: "B", color: "green" },
//   { letter: "C", color: "gray" },
//   { letter: "D", color: "gray" },
// ]

export function getLettersObject(gameWord, arrayWords) {
  const priorities = ["excluded", "contains", "matched"];

  const colors = [];

  for (const word of arrayWords) {
    const statusArray = getMatchedLettersArray(gameWord, word); 

    for (let i = 0; i < word.length; i++) {
      colors.push({
        letter: word[i], 
        color: statusArray[i]
      })
    }
  }
  
  Object.groupBy = function(items, callback) {
    const grouped = {};

    for (const item of items) {
      const sortedBy = callback(item)

      grouped[sortedBy] ??= []
      grouped[sortedBy].push(item)
    }

    return grouped;
  }
  
  const groups = Object.groupBy(colors, x => x.letter);

  const entries = Object.entries(groups)
    .map(([letter, array]) => [letter, array.map(x => x.color).sort((a, b) => priorities.indexOf(b) - priorities.indexOf(a))[0]]);
    
  const map = Object.fromEntries(entries)

  return map;
}

