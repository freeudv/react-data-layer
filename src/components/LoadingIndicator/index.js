import React from 'react';
import {Preloader} from 'react-materialize';

const LoadingIndicator = ({loading, error, children}) => {
  if (loading) {
    return (
      <div>
        <Preloader size="small" />
      </div>
    );
  }

  if (error) {
    return <p>An error occurred.</p>;
  }

  return <div>{children}</div>;
};

export default LoadingIndicator;
