// 20 sided dice
// help from module 20
import React, { useState } from "react";
import { Form } from "react-bootstrap";

function DiceRoller() {
  const [dice, setDice] = useState(1);

  function rollDice() {
    setDice(Math.floor(Math.random() * 20) + 1);
  }

  return (
    <Form className="">
      <Form.Group className="">
        <button onClick={rollDice}>Roll dice</button>
        <p>Result: {dice}</p>
      </Form.Group>
    </Form>
  );
}

export default DiceRoller;
