import React, { useState } from "react";

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
    <div>
      <h1>Fantasy Name Generator</h1>
      <button onClick={handleNameGeneration}>Generate Name</button>
      <p>{fantasyName}</p>
    </div>
  );
}

export default FantasyNameGenerator;
