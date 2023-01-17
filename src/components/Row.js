import React from "react";

export default function Row({ guess, currentGuess }) {
  // Check if there is a guess value
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>
            {l.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = [...currentGuess];

    return (
      <div className="row current">
        {letters.map((letter, i) => {
          return (
            <div key={i} className="filled">
              {" "}
              {letter}{" "}
            </div>
          );
        })}
        {[...Array(5 - letters.length)].map((_, i) => {
          return <div key={i}></div>;
        })}
      </div>
    );
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
