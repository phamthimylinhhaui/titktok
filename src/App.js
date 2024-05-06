import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const gifts = [
  'pt 1',
  'pt 2',
  'pt 3',
];

const courses = [
  {
    id: 1,
    label: 'php',
  },
  {
    id: 2,
    label: 'html',
  },
  {
    id: 3,
    label: 'js',
  }
];
function App() {
  const [gift, setGift] = useState();
  const [name, setName] = useState();
  const [radio, setRadio] = useState(1);
  const [checkbox, setCheckbox] = useState([1]);

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]);
  }

  const handleCheck = (id) => {
    setCheckbox(pre => {
      const isChecked = checkbox.includes(id);
      if (isChecked) {
        return checkbox.filter(item => {
          return item != id;
        })
      } else {
        return [...pre, id];
      }
    })
  }

  const handSubmit = () => {
    console.log(
      name,
      radio,
      checkbox
    )
  }

  return (
    <div>
      <div>
        <form>
          {/*checkbox*/}
          <div>
            <label htmlFor="">checkbox</label>
            {
              courses.map(course => (
                <div key={course.id}>
                  <input type="checkbox"
                         checked={checkbox.includes(course.id)}
                         onChange={() => handleCheck(course.id)}/>
                  {course.label}
                </div>
              ))
            }
          </div>
          {/*input*/}
          <div>
            <label htmlFor="">name</label>
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value)
              }}
              value={name}
            />
          </div>
          {/*radio*/}
          <div>
            <label htmlFor="">radio</label>
            {courses.map(course => (
              <div key={course.id}>
                <input
                  type="radio"
                  checked={course.id === radio}
                  onChange={() => {
                    setRadio(course.id)
                  }}
                /> {course.label}
              </div>
            ))}
          </div>
          <div>
            <button type="button" onClick={handSubmit}>submit</button>
          </div>
        </form>
        <h1>{gift || 'chua co phan thuong'}</h1>

        <button onClick={randomGift}>
          lay thuong
        </button>
      </div>
    </div>
  );
}

export default App;
