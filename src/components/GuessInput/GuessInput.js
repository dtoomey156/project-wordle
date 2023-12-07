import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [word, setWord] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (word.length !== 5) {
      return;
    }

    handleSubmitGuess(word);

    setWord("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={word}
        id="guess-input"
        type="text"
        onChange={(e) => {
          setWord(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
