import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const UpcomingMoviePage = () => {
  const [upcomingMovies, setUpcoming] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(upcomingMovies => {
      setUpcoming(upcomingMovies);
    });
  }, [])

  return (
    <PageTemplate 
      title='No. Movies'
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} /> 
      }}
    />
  );
};

export default UpcomingMoviePage;