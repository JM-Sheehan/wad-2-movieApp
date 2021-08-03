import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatchListButton from "../components/buttons/addToWatchList";

const UpcomingMoviePage = () => {
  const [upcomingMovies, setUpcoming] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(upcomingMovies => {
      setUpcoming(upcomingMovies);
    });
  }, [])

  return (
    <PageTemplate 
      title='Upcoming Movies'
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToWatchListButton movie={movie} /> 
      }}
    />
  );
};

export default UpcomingMoviePage;