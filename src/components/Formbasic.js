
import React, { useState } from 'react'

const Formbasic = () => {
let [name,setName]=useState("");

function handleInput(e){
setName(e.target.value);
}

  return (
    <div>
        <form>
            <input type="text" onChange={handleInput} />
        </form>
        <h1>hi {name}</h1>
    </div>
  )
}

export default Formbasic