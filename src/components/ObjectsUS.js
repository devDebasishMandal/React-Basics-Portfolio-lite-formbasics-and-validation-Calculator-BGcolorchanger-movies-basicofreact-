import React, { useState } from "react";

const ObjectsUS = () => {
  const [coins, setCoins] = useState({ gold: 0, silver: 0 });

  const incG = () => {
    //this value will be replaced with the whole object
    // setCoins(coins.gold+1);
    //we need to update the whole object

    setCoins({ gold: coins.gold + 1, silver: coins.silver });
  };
  const incS = () => {
    //id there is a large data we use SPREAD
    setCoins({ ...coins, silver: coins.silver + 1 });
  };
  return (
    <div>
      <h1>
        Gold:{coins.gold} | Silver:{coins.silver}
      </h1>
      <button onClick={incG}>increase Gold </button>
      <button onClick={incS}>increase Silver</button>
      <button
        onClick={() => {
          setCoins({ gold: 0, silver: 0 });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ObjectsUS;
