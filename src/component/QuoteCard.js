import React from 'react';

const QuoteCard = ({ quote, handleAuthorClick }) => {
  return (
    <div className="quote-card">
      <div className="quote-text">{quote.content}</div>
      <div className="quote-author" onClick={() => handleAuthorClick(quote.author)}>
        - {quote.author}
      </div>
    </div>
  );
};

export default QuoteCard;
