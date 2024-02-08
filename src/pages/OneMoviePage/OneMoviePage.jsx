import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './one-movie-page.module.css';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const OneMoviePage = () => {
  const location = useLocation();
  const backButton = location?.state?.from ?? '/';

  return (
    <div className={styles.container}>
      <MovieDetails />
      <h3 className={styles.title}>Additional information</h3>
      <ul className={styles.list}>
        <li>
          <Link to="cast" state={{ from: backButton }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backButton }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default OneMoviePage;
