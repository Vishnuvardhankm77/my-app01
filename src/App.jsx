
import './App.css';
import React from 'react';

function App() {
  var [ar, setAr] = React.useState(["Cat", "Dog", "Mouse"])
  function add() {
   var res=document.getElementById("inp").value
   setAr([...ar,res])
  }
  return (
    <div>
      <input type="text" id='inp' />
      <button onClick={add()}>add</button>
      {
        ar.map((a) => {
          return <li>{a}</li>
        })
      }
      </div>
  )
}

export default App;
