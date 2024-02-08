import styles from './home.module.css';
import { getTrending } from 'api/movies';
import { useEffect, useState } from 'react';
import MovieList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [picture, setPicture] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getTrending();
        setPicture(prevPicture => (data.results?.length ? [...prevPicture, ...data.results] : prevPicture));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Trending today</h1>
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

export default Home;
