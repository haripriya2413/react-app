import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchData } from './api';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
   
    getData();

  },[]);

  const getData = async () => {
    
    try {
      const articles = await fetchData();
      console.log(articles['data'],'')
      setData(articles['data']);
    
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App </h1>
        <ul>
          {data && data.map((item,id) => (
            <li key={id}>
              <h2>{item.attributes?.title}</h2>
              <p>{item.attributes?.content[0].children[0].text}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;