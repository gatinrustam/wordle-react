import React from 'react';
import { generateKey } from '../helpers/helpers';

const squares = Array(5).fill();

export function EmptyRow() {
  return (
    <div className="playground__row">
      {squares.map((key, index) => {
          return (
            <div key={generateKey(key, index)} className="letter"></div>
          )
        })}
    </div>
  )
}