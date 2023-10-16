import React from "react";

function Todolist(){
var[x,setX]=React.useState(["vishnu","fazil","charan"])
    return(
        <div className="mybox">
        {
           x.map((a)=>{
            return <li>{a}</li>
           })
        }
        </div>
    )
}
export default Todolist;