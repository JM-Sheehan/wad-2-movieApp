import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviePage = () => {
  const [upcomingMovies, setUpcoming] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(upcomingMovies => {
      setUpcoming(upcomingMovies);
    });
  }, [])

  const addToFavorites = movieId => {
    setUpcoming(movies => {
      const index = movies.map(m => m.id).indexOf(movieId);
      StubAPI.add(movies[index]);
      let newMoviesState = [...movies]
      newMoviesState.splice(index, 1);
      return newMoviesState;
    });
  };

  return (
      <PageTemplate
        title='Upcoming Movies'
        movies={upcomingMovies}
        buttonHandler={addToFavorites}
      />
  );
};

export default UpcomingMoviePage;