import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data,setData]=useState('sample');
  const onAPIData =async ()=>{
  // let data = await  fetch('https://fakestoreapi.com/products/1');
  let data = await axios.get('https://fakestoreapi.com/products/1');
  console.log(data);
  setData(data.data.category);
  }
  return (
    <div className="App">
    
      <header className="App-header">
        <button onClick={onAPIData}>fetch data</button>
        <p>{data}</p>
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    </div>
  );
}

export default App;
