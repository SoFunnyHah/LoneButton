import React, { useState } from 'react';

export default function New() {
  const [quote, setQuote] = useState('');

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '18dfe2d5d9msh6c1306184b95847p11460ajsn759f31fd449c',
      'X-RapidAPI-Host': 'random-quote-api1.p.rapidapi.com',
    },
  };

  const clickHandler = (e) => {
    e.preventDefault();
    fetch(
      'https://random-quote-api1.p.rapidapi.com/randomQuote',
      options,
    )
      .then((response) => response.json())
      .then((response) => setQuote(response))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className="container">
        <h2>Lone_Button</h2>
        <div className="container-castom">
          <span className="front">
            <div onClick={clickHandler} className="pixel2">
              GENERATE
            </div>
          </span>
        </div>
      </div>
      {quote === '' ? (
        <></>
      ) : (
        <div className="textBody">
          <p>
            {quote.quote}
          </p>
          <p>
            (c. )
            {quote.author}
          </p>
        </div>

      )}
      <audio autoplay="true" volume="0.5" id="mainMusic" src="./music/intro.mp3" />
    </>
  );
}
