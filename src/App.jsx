import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  function abc(){
    var x=document.getElementById('d1').value;
    document.getElementById('he1').innerHTML=x;
  }
  var [y,setY]=useState('')
  function abc(v){
    setY(v)
  }
  return (
    <div>
      <h1>lets learn form handling in ReactJS</h1>
      <label htmlFor=''>This is DOM based From Element</label>
      <input onKeyUp={()=>{abc()}} type="text" id='d1'/>
      <h1 id='he1'>You Entered:</h1>
      <hr />
      <label htmlFor=''>This is React based From Element</label>
      <input  type="text" onKeyUp={(e)=>{abc(e.target.value)}}/>
      <h1>You Entered:{y}</h1>
    </div>
  );
}

export default App;
