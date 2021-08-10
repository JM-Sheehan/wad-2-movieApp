import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import RemoveFromWatchListButton from '../components/buttons/removeFromWatchList'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListPage = props => {
  const context = useContext(MoviesContext);
  const watchList = context.upcoming.filter( m => m.watch_list )
  return (
    <MovieListPageTemplate
      movies={watchList}
      title={"WatchList"}
      action={movie => <RemoveFromWatchListButton movie={movie} />}
    />
  );
};

export default WatchListPage;