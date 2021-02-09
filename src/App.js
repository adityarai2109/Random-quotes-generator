import "./App.css";
import React, { useState } from "react";

const quotes_array = [
  {
    id: 1,
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
  },
  {
    id: 2,
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    id: 3,
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    id: 4,
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    id: 5,
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    id: 6,
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    id: 7,
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    id: 8,
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  {
    id: 9,
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    id: 10,
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    id: 11,
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    id: 12,
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling",
  },
  {
    id: 13,
    quote:
      "Don’t walk in front of me… I may not follow\nDon’t walk behind me… I may not lead\nWalk beside me… just be my friend",
    author: "Albert Camus",
  },
  {
    id: 14,
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 15,
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    id: 16,
    quote: "In order to write about life first you must live it.",
    author: "C.S. Lewis",
  },
  {
    id: 17,
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
    author: "Maya Angelou",
  },
  {
    id: 18,
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    id: 19,
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    id: 20,
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
];

function App() {
  const [i, setI] = useState(0);

  let rgb = [];
  for (let i = 0; i < 3; i++) rgb.push(Math.floor(Math.random() * 100));
  let bg = "rgb(" + rgb.join(",") + ")";

  function Randomiser() {
    setI(Math.floor(Math.random() * 19 + 1));
    console.log(i);
  }

  return (
    <div className="App" style={{ backgroundColor: bg }}>
      <div id="quote-box">
        <div id="text" style={{ color: bg }}>
          <i class="fas fa-quote-left" style={{ color: bg }}></i>
          <div id="quote-text">{quotes_array[i].quote}</div>
          <i class="fas fa-quote-right" style={{ color: bg }}></i>
        </div>

        <div id="author" style={{ color: bg }}>
          {" - "}
          {quotes_array[i].author}
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
