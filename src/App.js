import React, { useState } from "react";
import "./styles.css";

const natureEmoji = {
  "🌸": "Cherry Blossom",
  "💮": "White Flower",
  "🏵️": "Rosette",
  "🌹": "Rose",
  "🥀": "Wilted Flower",
  "🌺": "Hibiscus",
  "🌻": "Sunflower",
  "🌼": "Blossom",
  "🌷": "Tulip",
  "💐": "Bouquet"
};
var emojisAvailable = Object.keys(natureEmoji);

export default function App() {
  const [meaning, setMeaning] = useState("");
  const [emoji, setEmoji] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;

    if (userInput in natureEmoji) {
      setMeaning(natureEmoji[userInput]);
    } else {
      setMeaning("Not in database");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(natureEmoji[emoji]);
  }

  return (
    <div className="App">
      <h1>Flowerpedia</h1>
      <h4>This is a flower emoji interpreter!</h4>
      <input
        onChange={inputChangeHandler}
        placeholder="Put a flower emoji to know its name!"
      />
      <h2> {meaning} </h2>
      <h3> Click on flower to know its name!</h3>
      {emojisAvailable.map(function (emoji) {
        return (
          <span
            onClick={() => {
              emojiClickHandler(emoji);
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
