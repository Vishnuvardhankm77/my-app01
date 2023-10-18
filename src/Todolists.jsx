
import Todo from "./Todo";
import React, {useCallback} from "react";

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
        },
        {
            title:'pay rent',
            status:false
        }
    ])
    const[sorting,setSorting]=React.useState("all");

    var del=useCallback((i)=>{
        var temp=[...todos];
        temp.splice(i,1);
        setTodos([...temp])
    },[todos])

    function donetodo(i){
        var temp=([...todos])
        temp[i].status=true
        setTodos([...temp])
    }
   
    function undoTodo(idx){
        var temp=[...todos];
        temp[idx].status=false;
        setTodos([...temp]);
    }

    function sortAll(e){setSorting("all");}
    function sortCompleted(e){setSorting("completed");}
    function sortNotCompleted(e){setSorting("notcompleted");}

    var filterList = todos.filter((todo)=>{
        if(sorting === "all"){
            return true;
        }else if(sorting==="completed"){
            return todo.status;
        }else if(sorting==="notcompleted"){
            return !todo.status;
        }
    })
    var add=React.useCallback(
        function (){
        var title1=document.getElementById("dd").focus();
        <br />
        if(title1!==""){
            var temp=([...todos])
            temp.push({title:title1+" ",status:false})
            setTodos([...temp]);
            document.getElementById("dd").value="";
        }
    },[todos])
       return(
        <div className="mybox">
            <input type="text" id="dd"/>
            <button onClick={()=>{add()}}>Add</button>
             <input type="radio"  value="all" name="radio" onClick={sortAll}/>:All &nbsp;&nbsp;&nbsp;
             <input type="radio"  value="completed" name="radio" onClick={sortCompleted}/>:Completed &nbsp;&nbsp;&nbsp;
             <input type="radio"  value="notcompleted" name="radio" onClick={sortNotCompleted}/>:Not Completed &nbsp;&nbsp;&nbsp;
            <div>
            {
                filterList.map((todo,i)=>{
                    return <Todo t={todo} f={del} key={i} idx={i} done={()=>{donetodo(i)}} undo={()=>{undoTodo(i)}}></Todo>
                })
            }
            </div>
        </div>
    )
}
export default React.memo(Todolist);