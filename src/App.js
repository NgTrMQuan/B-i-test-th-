import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteCard from "./component/QuoteCard";
import "./App.css";

function App() {
  const [quote, setQuote] = useState({});
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getNewQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAuthorClick = () => {
    axios
      .get(`https://api.quotable.io/quotes?author=${author}`)
      .then((response) => {
        setAuthorQuotes(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="quote-container">
        <QuoteCard quote={quote} />
        <div className="button-container">
          <button className="button" onClick={getNewQuote}>
            New Quote
          </button>
        </div>
      </div>
      <div className="author-container">
        <input
          type="text"
          placeholder="Enter author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="button" onClick={handleAuthorClick}>
          Search
        </button>
        {authorQuotes.length > 0 && (
          <div className="author-quotes">
            <h2>Quotes by {author}</h2>
            {authorQuotes.map((quote) => (
              <QuoteCard key={quote._id} quote={quote} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
