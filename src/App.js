import { useState } from 'react';
import './App.css';

import { Header } from './components/Header.jsx';
import { Keyboard } from './components/Keyboard.jsx';
import { Playground } from './components/Playground.jsx';

function App() {
  const [gameWord, setGameWord] = useState('peace');
  const [words, setWords] = useState([])
  const [writeWord, setWriteWord] = useState('')

  const [disabled, setDisabled] = useState(false);

  function onLetterPress(key) {
    setWriteWord(prev => {
      if (writeWord.length < 5) {
        return prev += key;
      }

      return prev;
    });
  }

  function onEnterPress() {
    if (writeWord.length === 5) {
      // TODO объеденить стейты и проверять writeWord внутри стрейта
      setWords(prev => [...prev, writeWord])
      setWriteWord(prev => prev = '')
      setDisabled(prev => {
        return !prev
      })
    }
  }
  
  function onDelPress() {
    setWriteWord(prev => {
      const limit = prev.length === 0 ? 0 : prev.length - 1;
      return prev.slice(0, limit);
    })
  }

  return (
    <div className="App">
      <Header />
      <Playground 
        gameWord={gameWord}
        playground={words} 
        currentWord={writeWord}
        disabled={disabled}
      />
      <Keyboard 
        words={words}
        gameWord={gameWord}
        onLetterPress={onLetterPress} 
        onEnterPress={onEnterPress}
        onDelPress={onDelPress}
      />
    </div>
  );
}

export default App;
