import React from "react";
import Todo from "./Todo";


function Todolist(){
    var[todos,setTodos]=React.useState([
        {
            title:'get bmw',
            status:false
        },
        {
            title:'get bike',
            status:true
        },
        {
            title:'get water',
            status:true
        },
        {
            title:'goto gym',
            status:false
        }
    ])
   
       return(
        <div className="mybox">
            {
                todos.map((t,i)=>{
                    return <Todo task={t} key={i} idx={i}></Todo>
                })
            }
        </div>
    )
}
export default React.memo(Todolist);