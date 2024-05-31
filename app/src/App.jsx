import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App () {
  const [data, setData] = useState('');

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
      <div className='App'>
          <ItemList />
      </div>
  );
}

export default App;