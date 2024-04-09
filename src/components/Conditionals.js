//conditional Rendring : usign Ternary in JSX
import React, { useState } from "react";

const Conditionals = () => {
  const [name, setName] = useState("");

  function handle(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <form>
        <input type="text" onChange={handle} />
      </form>
      {name != "" ? <h1>Hello {name}</h1> : ""}
    </div>
  );
};

export default Conditionals;
