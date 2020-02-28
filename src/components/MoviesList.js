import React from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export const MoviesList = ({ movies }) => {
  return (
    <div className="MoviesList">
      {movies.map(movie => {
        return (
          <div className="MoviesList-item" key={movie.imdbID}>
            <Movie title={movie.Title} poster={movie.Poster} year={movie.Year} />;
          </div>
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};
