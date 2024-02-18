import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from '../../services/themoviedb-API';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  useEffect(() => {
    async () => {
      try {
        setIsLoading(true);
        const movies = await fetchMovieByQuery(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
  });
  return (
    <div>
      <SearchBar value={movieName} onChange={updateQueryString} />
      {isLoading ? (
        <Loader />
      ) : movieName && searchResults.length === 0 ? (
        <h2>Nothing Found</h2>
      ) : (
        <MovieList movies={searchResults} />
      )}
    </div>
  );
};

export default MoviesPage;