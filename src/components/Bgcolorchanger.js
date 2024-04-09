import React, { useState } from "react";
import "./bgcolor.css";

const Bgcolor = () => {
  let [color, setColor] = useState("black");

  let Mystyle = {
    backgroundColor: color,
  };

  function change(e) {
    let btncolor = e.target.dataset.dev;
    console.log(btncolor)
    setColor(btncolor);
    // {{ba}}

    // Mystyle["backgroundColor"] = color;
  }
  // { backgroundColor: `${color}` }

  return (
    <div className="background" style={Mystyle}>
      <div className="box">
        <button className="btn" id="red" onClick={change} data-dev="red">
          Red
        </button>
        <button className="btn" id="blue" onClick={change} data-dev="blue">
          Blue
        </button>
        <button
          className="btn"
          id="lavander"
          onClick={change}
          data-color="lavander"
        >
          Lavander
        </button>
      </div>
    </div>
  );
};

export default Bgcolor;
