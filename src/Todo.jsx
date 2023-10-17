import React from "react";

function Todo(props){
    console.log(props.i)
    return(
        <div className="mybox">
            <b>{props.t}</b>
            <button onClick={()=>{props.d(props.i)}}>Delete</button>
            <button onClick={props}>Undo</button>
            <button onClick={props}>Done</button>
        </div>
    )
}

export default React.memo(Todo);