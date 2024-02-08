import { useEffect, useState } from 'react';
import styles from './cast.module.css';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/movies';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const defPicture = 'https://st.depositphotos.com/1898481/3858/i/450/depositphotos_38585247-stock-photo-unnamed.jpg';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieCast(movieId);

        setCast(data.cast?.length ? data.cast : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  const items = cast.map(item => (
    <li key={item.cast_id} className={styles.item}>
      <img src={item.profile_path ? `https://image.tmdb.org/t/p/original${item.profile_path}` : defPicture} alt={item.name} width="200px" />
      <h3 className={styles.name}>{item.name}</h3>
      <p className={styles.character}>Character: {item.character}</p>
    </li>
  ));

  return (
    <div>
      {loading && <p>...Loading</p>}
      {error && <p>Error {error}</p>}
      {cast && <ul className={styles.list}>{items}</ul>}
    </div>
  );
};
export default Cast;
