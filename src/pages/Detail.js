import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const API_KEY = '99f2c4bc';

export const Detail = props => {
  const [movie, setMovie] = useState({});

  const _fetchMovie = ({ id }) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(response => response.json())
      .then(data => {
        console.log({ data });
        setMovie(data);
      });
  };

  useEffect(() => {
    const { id } = props.match.params;
    _fetchMovie({ id });
  }, [props.match]);

  const { Title, Poster, Actors, Metascore, Plot } = movie;

  return (
    <div>
      <Link to="/">Go Home</Link>
      <h1>{Title}</h1>
      <img src={Poster} alt={Title} />
      <h3>{Actors}</h3>
      <p>{Metascore}</p>
      <p>{Plot}</p>
    </div>
  );
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};
