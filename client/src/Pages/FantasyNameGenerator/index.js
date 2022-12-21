import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { UPDATE_CHAR } from "../utils/mutations";

const fantasyNameList = [
  "Aurora",
  "Balthazar",
  "Celeste",
  "Dorian",
  "Elysium",
  "Fiona",
  "Gwendolyn",
  "Hector",
  "Isolde",
  "Jupiter",
  "Keaton",
  "Luna",
  "Mara",
  "Nyx",
  "Octavia",
  "Pandora",
  "Quinn",
  "Raphael",
  "Serendipity",
  "Triton",
  "Ursula",
  "Violet",
  "Willow",
  "Xander",
  "Yara",
  "Zephyr",
];

function FantasyNameGenerator() {
  const [fantasyName, setFantasyName] = useState("");

  const handleNameGeneration = () => {
    const randomIndex = Math.floor(Math.random() * fantasyNameList.length);
    const randomName = fantasyNameList[randomIndex];
    setFantasyName(randomName);
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="card">
        <h1 className="card-header bg-dark text-light p-2">
          Fantasy Name Generator
        </h1>
        <button onClick={handleNameGeneration}>Generate Name</button>
        <p>{fantasyName}</p>
      </div>
    </main>
  );
}

export default FantasyNameGenerator;
