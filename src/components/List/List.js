import React from 'react';
import ListItem from './ListItem/ListItem';
import './List.css';

const list = (props) => {
  let movieList = props.movies.map( mov => {
    return (
      <ListItem
        key={mov.id}
        movieID={mov.id}
        movieTitle={mov.fields.title}
        episode={mov.fields.episode_id}
        date={mov.fields.release_date}
        selectMovie={props.selectMovie} />
    )
  })
  return (
    <div className="list">
      { movieList }
    </div>
  );
};

export default list;
