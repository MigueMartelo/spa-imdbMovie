import React, { useState } from 'react';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MoviesList } from './components/MoviesList';

import './App.css';
import 'bulma/css/bulma.css';

function App() {
  const [results, setResults] = useState([]);
  const [usedSearch, setUsedSearch] = useState(false);

  const _handleResults = res => {
    setResults(res);
    setUsedSearch(true);
  };

  const _renderResults = () => {
    return results.length === 0 ? (
      <p>
        Sorry!
        <span role="img" aria-label="Emoji">
          😞
        </span>
        Results not found!
      </p>
    ) : (
      <MoviesList movies={results} />
    );
  };

  return (
    <div className="App">
      <Title>Search Movies</Title>
      <div className="SearchForm-wrapper">
        <SearchForm onResults={_handleResults} />
      </div>
      {usedSearch ? _renderResults() : <small>Use the form to search a movie</small>}
    </div>
  );
}

export default App;
