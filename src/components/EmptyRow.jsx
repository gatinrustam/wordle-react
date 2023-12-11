import React from 'react';
import { generateKey } from '../helpers/helpers';

const squares = Array(5).fill();

export function EmptyRow() {
  return (
    <div className="playground__row">
      {squares.map((_, index) => {
          return (
            <div key={index} className="letter"></div>
          )
        })}
    </div>
  )
}