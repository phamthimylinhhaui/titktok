import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const gifts = [
  'pt 1',
  'pt 2',
  'pt 3',
];
function App() {
  const [gift, setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]);
  }

  return (
    <div className="App">
      <div>
        <h1>{gift || 'chua co phan thuong'}</h1>

        <button onClick={randomGift}>
          lay thuong
        </button>
      </div>
    </div>
  );
}

export default App;
