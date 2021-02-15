import React, { useState } from "react";
import "./App.css";
import FetchQuote from "./FetchQuote";
import FetchAuthor from "./FetchAuthor";

function App() {
  const [i, setI] = useState(0);

  let rgb = [];
  for (let i = 0; i < 3; i++) rgb.push(Math.floor(Math.random() * 100));
  let bg = "rgb(" + rgb.join(",") + ")";

  function Randomiser() {
    setI(Math.floor(Math.random() * 101 + 1));
  }

  return (
    <div className="App" style={{ backgroundColor: bg }}>
      <div id="quote-box">
        <div id="text" style={{ color: bg }}>
          <i class="fas fa-quote-left" style={{ color: bg }}></i>
          <div id="quote-text">{<FetchQuote i={i} />}</div>
          <i class="fas fa-quote-right" style={{ color: bg }}></i>
        </div>

        <div id="author" style={{ color: bg }}>
          - {<FetchAuthor i={i} />}
        </div>

        <div id="buttons">
          <div id="socials">
            <a
              href="https://twitter.com/"
              id="tweet-quote"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-twitter-square" style={{ color: bg }}></i>
            </a>
            <a
              href="https://www.tumblr.com/"
              id="tumblr-quote"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-tumblr-square" style={{ color: bg }}></i>
            </a>
          </div>
          <div id="new-quote">
            <button onClick={Randomiser} style={{ backgroundColor: bg }}>
              Next quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
