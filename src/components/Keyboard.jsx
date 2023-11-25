import React, { useEffect } from "react";
import { KeyboardRow } from "./KeyboardRow";

const keyboard = [
  'qwertyuiop',
  'asdfghjkl',
  'zxcvbnm'
]

export function Keyboard({words, gameWord, onLetterPress, onEnterPress, onDelPress}) {
  
  useEffect(() => {
    function onKeyPress(e) {
      if (/^[a-z]$/.test(e.key)) {
        onLetterPress(e.key)
      }

      if (e.key === "Enter") {
        console.log(e.key)
        onEnterPress()
      }
      
      if (e.key === "Backspace") {
        onDelPress()
      }
    }
    
    document.addEventListener('keydown', onKeyPress);

    return () => {
      document.removeEventListener('keydown', onKeyPress)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onEnterPress])

  return (
    <div className="keyboard">
      <div className="keyboard__row">
        <KeyboardRow 
          words={words} 
          gameWord={gameWord}
          row={keyboard[0]} 
          onLetterPress={onLetterPress}
          onEnterPress={onEnterPress}
        />
      </div>
      
      <div className="keyboard__row">
        <KeyboardRow 
          words={words} 
          gameWord={gameWord}
          row={keyboard[1]} 
          onLetterPress={onLetterPress}
          onEnterPress={onEnterPress}
        />
      </div>

      <div className="keyboard__row">
        <button 
          type="button"
          onClick={onEnterPress} 
          className="keyboard__key keyboard__key--wide keyboard__key--enter"
        ></button>

        <KeyboardRow
          words={words} 
          gameWord={gameWord}
          row={keyboard[2]} 
          onLetterPress={onLetterPress}
          onEnterPress={onEnterPress}
        />

        <button 
          type="button" 
          onClick={onDelPress} 
          className="keyboard__key keyboard__key--wide keyboard__key--backspace"
        ></button>
      </div>
    </div>
  )
}