import './App.css';
import { useState } from 'react'
import Content from './components/content'

const order = [100, 2, 500];
function App() {
  const [show, setShow] = useState(false);


  return (
    <div className="App">
      <div>
        <button onClick={() => setShow(!show)}>
          click to add content
        </button>
        {show && <Content/>}
      </div>

    </div>
  );
}

export default App;
