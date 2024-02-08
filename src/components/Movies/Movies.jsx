import styles from './movies.module.css';
import { searchMovies } from 'api/movies';
import { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [picture, setPicture] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await searchMovies(query);
        setPicture(data?.results ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSearch = ({ query }) => {
    setSearchParams({ query });
    setPicture([]);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {loading && <p>...Loading</p>}
      {error && <p>Error {error}</p>}
      <ul className={styles.list}>
        {picture.map(({ id, title }) => (
          <MovieList key={id} title={title} id={id} />
        ))}
      </ul>
    </>
  );
};
export default Movies;
