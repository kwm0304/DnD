import React, { useState } from "react";

function DiceRoller() {
  const [dice, setDice] = useState(1);

  function rollDice() {
    setDice(Math.floor(Math.random() * 20) + 1);
  }

  return (
    <div>
      <button onClick={rollDice}>Roll dice</button>
      <p>Result: {dice}</p>
    </div>
  );
}

export default DiceRoller;
