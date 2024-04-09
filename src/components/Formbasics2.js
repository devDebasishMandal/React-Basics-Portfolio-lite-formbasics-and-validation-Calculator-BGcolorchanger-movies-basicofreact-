import React, { useState } from "react";

const Formbasics2 = () => {
  const [name, setName] = useState("");
  const [ans, setAns] = useState("");

  function submit(e) {
    e.preventDefault();
    setAns("hello " + name);
    setName("");
  }

  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            setName(e.target.value);
            setAns("");
          }} value={name}
          type="text"
        />
        <button onClick={submit}>Submit</button>
      </form>
      <h1>{ans}</h1>
    </div>
  );
};

export default Formbasics2;
