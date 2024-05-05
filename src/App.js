import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const order = [100, 2, 500];
function App() {
  const [counter, setCounter] = useState(
    order.reduce((total, curr) => (total + curr))
  );
  const [info, setInfo] = useState({
    name: 'linh',
    age: '12',
  });
  const handleIncrease = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // how to setCounter + 3 and re-render 1 time =>use callback in setState

    setCounter(pre => pre + 1)
    setCounter(pre => pre + 1)
    setCounter(pre => pre + 1)
  }

  const handleAddInfo = () => {
    setInfo({
      ...info,
      bio: 'yeu mau hong'
    })
  }

  return (
    <div className="App">
      <div>
        <h1>add info</h1>
        <p>{JSON.stringify(info)}</p>
        <button onClick={handleAddInfo}>
          add information
        </button>
      </div>
      <div>
        <h1>counter</h1>
        <p>{counter}</p>
        <button onClick={handleIncrease}>
          increase
        </button>
      </div>
    </div>
  );
}

export default App;
