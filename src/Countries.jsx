import React from "react";
import axios from "axios";

function Countries(){
    var[loading,setLoading]=React.useState(true)
    var[country,setcountry]=React.useState([]);
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all")
        .then(function(res){
            setcountry([...res.data])
            setLoading(false)
        })
    },[])
    function asc(){
        setcountry([...country].sort((a,b)=>a.population-b.population))
    }
    function dsc(){
        setcountry([...country].sort((a,b)=>b.population-a.population))
    }
    function search(){
        var s = document.getElementById("ds").value
        var e = country.filter((c)=>{
            return(c.name.toLowerCase().startsWith(s))
        })
        country(e)
    }

    return(
        <div>
           <center> <h1>Countries</h1> 
           {
           loading && (
           <img width="1000px" src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" />
            )
           }
           </center>
           <div className="view">
           <h3>Sort by population</h3>
           <button onClick={asc}>Ascending order</button>
           <button onClick={dsc}>Descending order</button>
           <input id="ds" type="text" onkeyup="search()" placeholder="search"/>
           </div>
            <ul className="style">
            {
                country.map((c)=>{
                    return <li>
                        <h2>{c.name.common}</h2>
                        <img src={c.flags[1]} alt="" width="200px" />
                        <h3>population:{c.population}</h3>
                        </li>;
                })
            }
            </ul>
        </div>
    )
}
export default Countries;