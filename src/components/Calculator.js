import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [op, setOp] = useState("");
  const [result, setResult] = useState("");

  function handleInp1(e) {
    setNum1(parseInt(e.target.value));
  }
  function handleInp2(e) {
    setNum2(parseInt(e.target.value));
  }
  function calc(e) {
    setOp(e.target.innerText);

    let ans = 0;
    switch (op) {
      case "+":
        ans = num1 + num2;
        break;
      case "-":
        ans = num1 - num2;
        break;
      case "*":
        ans = num1 * num2;
        break;
      case "/":
        ans = num1 / num2;
        break;
      default:
        alert("No valid operation");
    }
    setResult(ans);
  }

  return (
    <div>
      <input type="text" data-n1="n1" onChange={handleInp1} />
      <input type="text" data-n2="n2" onChange={handleInp2} />
      <button onClick={calc}>+</button>
      <button onClick={calc}>-</button>
      <button onClick={calc}>*</button>
      <button onClick={calc}>/</button>
      <h2>{result}</h2>
    </div>
  );
};

export default Calculator;
