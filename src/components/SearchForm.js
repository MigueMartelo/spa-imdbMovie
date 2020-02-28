import React, { useState } from 'react';

export const SearchForm = () => {
  const [inputMovie, setInputMovie] = useState('');

  const _handleChange = e => {
    setInputMovie(e.target.value);
  };

  const _handleSubmit = e => {
    e.preventDefault();
    alert(inputMovie);
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
