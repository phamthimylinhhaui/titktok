import './App.css';
import { useState } from 'react'

function App() {
  const [jobs, setJobs] = useState(( ) => {
    return JSON.parse(localStorage.getItem('jobs')) ?? [];
  });
  const [job, setJob] = useState();
  const handleJob = (e) => {
    setJob(e.target.value);
  }

  const handSubmit = () => {
    setJobs(pre => {
      const jsonJob = JSON.stringify([...pre, job]);
      localStorage.setItem('jobs', jsonJob);
      return [...pre, job];
    });
    setJob('')
  }

  return (
    <div style={{padding:20}}>
      <div>
        <label htmlFor="">checkbox</label>
        <input type="text"
               value={job}
               onChange={e => handleJob(e)}
        />
        <button onClick={handSubmit}>submit</button>
        <ul>
          {
            jobs.map((job, index) => (
              <li key={index}>{job}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
