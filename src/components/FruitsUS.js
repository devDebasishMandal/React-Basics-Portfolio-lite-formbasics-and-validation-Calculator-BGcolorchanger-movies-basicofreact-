import React, { useState } from 'react'

const FruitsUS = () => {

const[favfruits,setFavfruits]=useState(["apple","grapse"])
const[fruit,setFruits]=useState("");

function handleF(e){
setFruits(e.target.value);
}

function addFruits(e){
e.preventDefault();
setFavfruits([...favfruits,fruit]);
setFruits("");
}

  return (
    <div>
    <form onSubmit={addFruits}>
        <input type="text" onChange={handleF} value={fruit}/>
        <button>Add</button>
    </form>
    <h3>{favfruits.join(", ")}</h3>
    </div>
  )
}

export default FruitsUS