import React from 'react';
import './ListItem.css';

const listItem = (props) => {

  return (
    <div
      className="list-item"
      onClick={ () => props.selectMovie( props.movieID ) }>
      <p>EPISODE { props.episode }</p>
      <p>{ props.movieTitle }</p>
      <p className="date">{ props.date }</p>
    </div>
  );
};

export default listItem;
