import React from "react";
import { Form } from "react-bootstrap";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";

const DiceRoller = () => {
  const rollDice = () => {
    const roll = new DiceRoll("4d6dl1");
    console.log(roll.output);
  };

  return (
    <Form className="flex-row justify-center">
      <Form.Group className="card">
        <button onClick={rollDice}>Roll dice</button>
      </Form.Group>
    </Form>
  );
};

export default DiceRoller;
