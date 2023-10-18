import React from 'react';
import './App.css';

function App() {
  React.useEffect(()=>{
    document.getElementById("dd").focus()
  },[])
  return (
    <div>
      <h1>lets learn form handling in ReactJS</h1>
      <input type="text" id=""dd/>
    </div>
  );
}

export default App; 