import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);


  return (
    <>
      <div className='App'>
        <h1>React and Node.js</h1>
        <p>{data}</p>
      </div>
    </>
  );
}
      

export default App
