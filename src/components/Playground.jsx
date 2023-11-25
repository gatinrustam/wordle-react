import React from 'react';
import { generateKey } from '../helpers/helpers';

import { Row } from './Row.jsx';
import { CurrentRow } from './CurrentRow.jsx';
import { EmptyRow } from './EmptyRow.jsx';

const MAX_ATTEMPTS_NUMBER = 6;

export function Playground({gameWord, playground, currentWord, setExcludedLetters, disabled}) {
  const emptyRowsNumbers = playground.length >= MAX_ATTEMPTS_NUMBER
    ? 0
    : MAX_ATTEMPTS_NUMBER - playground.length - 1;

  return (
    <div className="playground">
      {playground.map((row, index) => (
        <Row 
          key={generateKey(row, index)}
          row={row} 
          gameWord={gameWord}
          setExcludedLetters={setExcludedLetters}
        />
      ))}

      {playground.length < MAX_ATTEMPTS_NUMBER && (
        <CurrentRow currentWord={currentWord} disabled={disabled} />
      )}

      {Array(emptyRowsNumbers).fill().map((key, index) => (
        <EmptyRow key={generateKey(key, index)} />
      ))}
    </div>
  )
}