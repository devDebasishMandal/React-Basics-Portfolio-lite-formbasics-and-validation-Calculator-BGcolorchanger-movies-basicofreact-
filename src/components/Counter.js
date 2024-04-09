import React from "react";
import { useState } from "react";
import "./counter.css";
const Counter =()=>{

let [count,setCount]=useState(0);
let inc=()=>{setCount(count=count+1)}
// console.log(count);
    return(
        <div className="box">
         <h1>{count}</h1>
         <button onClick={inc}>Inc</button>
         <button onClick={()=>{setCount(count=count-1)}}>Decrease</button>
         <button onClick={()=>{setCount(0)}}>Reset</button>
        </div>
    )
}

export default Counter;