import React from "react";

function Todo(props){
    console.log(props.idx)
    return(
        <div className="mybox">
            <b style={props.task.status===true?{textDecoration:'line-through'}:{}}>{props.task.title}</b>
            <button onClick={()=>{props.d(props.i)}}>Delete</button>
        </div>
    )
}

export default React.memo(Todo);