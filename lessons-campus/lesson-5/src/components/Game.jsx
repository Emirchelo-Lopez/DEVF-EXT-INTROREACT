import React, { useState } from "react";
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from "./RestartButton";

// Helper function to generate a random number
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

function Game() {
  // State for the secret number, initialized only once
  const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
  // State for the user's current input
  const [userGuess, setUserGuess] = useState("");
  // State for the feedback message
  const [message, setMessage] = useState("");

  // Handler for input changes
  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  // Handler for checking the guess
  const handleCheckGuess = () => {
    const guessNum = parseInt(userGuess, 10);

    if (isNaN(guessNum)) {
      setMessage("Please enter a valid number.");
      return;
    }

    if (guessNum === secretNumber) {
      setMessage("🎉 Correct! You guessed the number! 🎉");
    } else if (guessNum < secretNumber) {
      setMessage("The number is higher. Try again!");
    } else {
      setMessage("The number is lower. Try again!");
    }
  };

  // Handler for restarting the game
  const handleRestart = () => {
    setSecretNumber(generateRandomNumber());
    setUserGuess("");
    setMessage("");
  };

  return (
    <div>
      <p>I'm thinking of a number between 1 and 100.</p>
      <InputNumber
        value={userGuess}
        onChange={handleInputChange}
        onSubmit={handleCheckGuess}
      />
      <button onClick={handleCheckGuess} style={{ marginLeft: "8px" }}>
        Guess
      </button>
      <Message text={message} />
      <RestartButton onClick={handleRestart} />
    </div>
  );
}

export default Game;
