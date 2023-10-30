import React from 'react';
import './App.css';
import Child from './Child';

function App() {
  var ref1=React.useRef();
  var ref2=React.useRef();

  React.useEffect(()=>{
    ref1.current.focus();
  },[])

  function focusnextbox(e){
    if(e.key==="Enter"){
      ref2.current.focus();
    }
  }
    
  return (
    <div className='mybox'>
      <h1>App Component</h1> 
      <input type="text" ref={ref1} onKeyUp={(e)=>{focusnextbox(e)}}/><br/>
      <input type="text" ref={ref2}/>
      <Child></Child>
      <input type="text" />
    </div>
  );
}

export default App; 