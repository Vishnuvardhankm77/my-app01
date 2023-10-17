import React from "react";
import Todo from "./Todo";


function Todolist(){
    var[todos,setTodos]=React.useState(["get BMW","get Water","get Car","get Bike"])
    function add(){
        var ntd=document.getElementById("d1").value;
        setTodos([...todos,ntd])
    }
    var del=React.useCallback(
        function (i){
                
            var temp=[...todos];
            temp.splice(i,1)
            setTodos([...temp])
        },[todos]
    )
       return(
        <div className="mybox">
       <h3>Todolist</h3>
       <input type="text"  id="d1"/>
       <button onClick={()=>{add()}}>Add</button>
       {
        todos.map((todo,index)=>{
            return (<Todo t={todo} d={del} i={index} key={index}></Todo>)
        })
       }
        </div>
    )
}
export default React.memo(Todolist);