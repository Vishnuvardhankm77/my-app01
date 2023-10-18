import React from "react";

function Todo(props){
    return(
        <div className="mybox">
            <b style={props.t.status===true?{textDecoration:'line-through'}:{}}>{props.t.title}</b>
            <button onClick={()=>{props.f(props.idx)}}>Delete</button>
            {
                props.t.status===true && <button onClick={props.undo}>undo</button>
            }
            {
                props.t.status===false && <button onClick={props.done}>Done</button>
            }
            
        </div>
    )
}

export default React.memo(Todo);    