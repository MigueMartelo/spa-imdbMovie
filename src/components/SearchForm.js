import React, { useState } from 'react';

const API_KEY = '99f2c4bc';

export const SearchForm = ({ onResults }) => {
  const [inputMovie, setInputMovie] = useState('');

  const _handleChange = e => {
    setInputMovie(e.target.value);
  };

  const _handleSubmit = e => {
    e.preventDefault();

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(response => response.json())
      .then(results => {
        const { Search = [], totalResults = '0' } = results;
        console.log({ Search, totalResults });
        onResults(Search);
      });
  };

  return (
    <form onSubmit={_handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            onChange={_handleChange}
            type="text"
            placeholder="Movie to search..."
          />
        </div>
        <div className="control">
          <button className="button is-info">Search</button>
        </div>
      </div>
    </form>
  );
};
