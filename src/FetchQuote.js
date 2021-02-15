import React, { useState } from "react";
import axios from "axios";

export default function FetchQuote(props) {
  const [quote, setQuote] = useState();
  const fetchData = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((response) => {
        setQuote(response.data.quotes[props.i].quote);
      });
  };
  fetchData();

  return <div>{quote}</div>;
}
