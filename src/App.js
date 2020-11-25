import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Cockpit from './components/Cockpit/Cockpit';
import List from './components/List/List';
import SingleMovie from './components/SingleMovie/SingleMovie';

import './App.css';

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [displayedList, setDisplayedList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get('https://star-wars-api.herokuapp.com/films')
    .then( res => {
      setMovieList(res.data);
      setDisplayedList(res.data);
    })
    .catch(err => console.log('Failed to fetch data', err))
  }, []);

  const selectMovieHandler = (id) => {
    const selected = movieList.filter( mov => mov.id === id );
    return setSelectedMovie({ ...selected[0] });
  }

  const sortList = (property) => {
    const sortedList = movieList.sort((a, b) => {
      if (a.fields[property] < b.fields[property]) {
        return -1;
      }
      if (a.fields[property] > b.fields[property]) {
        return 1;
      }
      return 0;
    });

    setMovieList([...sortedList]);

    if( query ){
      return setDisplayedList( sortedList.filter(mov => mov.fields.title.toLowerCase().includes( query ) ) );
    }

    return setDisplayedList([...sortedList]);
  }

  const searchList = (e) => {
    const searchQuery = e.currentTarget.value.toLowerCase();
    const resultList = movieList.filter(mov => mov.fields.title.toLowerCase().includes( searchQuery ));

    setQuery(searchQuery);
    return setDisplayedList([...resultList]);
  }


  return (
    <div className="App">
      <Cockpit
        searchList={searchList}
        sortList={sortList}/>
      <List
        movies={displayedList}
        selectMovie={selectMovieHandler}/>
      <SingleMovie
        singleMovie={selectedMovie} />
    </div>
  );
}

export default App;
