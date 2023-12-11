import { getLettersObject } from "../helpers/helpers";
import classNames from "classnames";

export function KeyboardRow({words, gameWord, row, onLetterPress, onEnterPress}) {
  const usedKey = getLettersObject(gameWord, words)

  return Array.from(row).map(key => (
    <button 
      type="button" 
      key={key}
      className={classNames('keyboard__key', usedKey[key] && `keyboard__key--${usedKey[key]}`)}
      onClick={() => onLetterPress(key)}
    >{key}</button>
  ))
}