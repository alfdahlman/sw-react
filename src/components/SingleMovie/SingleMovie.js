import React from 'react';
import './SingleMovie.css';

const singleMovie = (props) => {

  let content = (
    <div className="no-content">
      <p>No movie selected</p>
    </div>
  )

  if(props.singleMovie?.fields){
    content = (
      <div className="content">
        <h2>{ props.singleMovie?.fields?.title }</h2>
        <p>{ props.singleMovie?.fields?.opening_crawl }</p>
        <p>Directed by: { props.singleMovie?.fields?.director }</p>
      </div>
    )
  }

  return (
    <div className="single">
      { content }
    </div>
  );
};

export default singleMovie;
