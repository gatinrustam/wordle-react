import { generateKey } from '../helpers/helpers';
const squares = Array(5).fill();

export function CurrentRow({currentWord, disabled}) {

  return (
    <div className="playground__row playground__row--active">
      {squares.map((key, index) => {
        if (index < currentWord.length) {
          return <div key={generateKey(key, index)} className="letter">{currentWord[index]}</div>
        }

        return <div key={generateKey(key, index)} className="letter"></div>
      })}
    </div>
  )
}