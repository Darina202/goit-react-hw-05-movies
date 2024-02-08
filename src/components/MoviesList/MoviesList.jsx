import { Link, useLocation } from 'react-router-dom';
import styles from './movie-list.module.css';

const MovieList = ({ id, title }) => {
  const location = useLocation();
  return (
    <li className={styles.item}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <p className={styles.title}>{title}</p>
      </Link>
    </li>
  );
};

export default MovieList;
