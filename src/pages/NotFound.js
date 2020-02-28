import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1 style={{ style: '#000', fontSize: 30 }}>404!</h1>
      <h2>Page not found</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
};
