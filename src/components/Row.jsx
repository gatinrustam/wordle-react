import React from 'react';
import { getMatchedLettersArray, generateKey } from '../helpers/helpers';

export function Row({row, gameWord}) {
  let currentColorsArray = getMatchedLettersArray(gameWord, row);

  // currentColorsArray.forEach((letter, index) => {
  //   if (letter === 'excluded') {
  //     setExcludedLetters(prev => [...prev, row[index]])
  //   }
  // })
  // console.log('>>>',row, currentColorsArray);

  return (
    <div className="playground__row">
      {Array.from(row).map((letter, index) => {
        const letterState = currentColorsArray[index];
        return (
          <div 
            key={generateKey(letter, index)}
            className={`letter letter--${letterState}`}
          >{letter}</div>
        )
      })}
    </div>
  )
}