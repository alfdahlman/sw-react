import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
  return (
    <div className="cockpit">
      <div className="sort-control">
        <span>Sort list:</span>
        <p onClick={  () => props.sortList('release_date') }>by date</p>
        <p onClick={  () => props.sortList('episode_id') }>by episode</p>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Type to search..."
          onKeyUp={props.searchList}/>
      </div>

    </div>
  );
};

export default cockpit;
