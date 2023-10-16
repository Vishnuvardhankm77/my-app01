import logo from './logo.svg';
import './App.css';
import Todolist from './Todolists';

function App() {
  function add(b){
   
  }
  return (
    <div className='mybox'>
      <h1>App Component</h1>
      <input type="text" id='d1'/>
      <button onClick={add()}>Add</button>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
