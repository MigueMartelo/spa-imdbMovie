import React, { useState } from 'react';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MoviesList } from './components/MoviesList';

import './App.css';
import 'bulma/css/bulma.css';

function App() {
  const [results, setResults] = useState([]);

  const _handleResults = res => {
    setResults(res);
  };

  return (
    <div className="App">
      <Title>Search Movies</Title>
      <div className="SearchForm-wrapper">
        <SearchForm onResults={_handleResults} />
      </div>
      {results.length === 0 ? <p>Sin resultados</p> : <MoviesList movies={results} />}
    </div>
  );
}

export default App;
