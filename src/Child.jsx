import React from "react";

var Child =React.forwardRef(
    function (){
        return(
            <div className="mybox">
                <h2>Child Component</h2>
                <input type="text"  />
            </div>
        )
    }
 )
export default Child;