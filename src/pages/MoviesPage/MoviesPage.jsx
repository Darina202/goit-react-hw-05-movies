import styles from './movies-page.module.css';
import Movies from 'components/Movies/Movies';

const MoviesPage = () => {
  return (
    <div className={styles.container}>
      <Movies />
    </div>
  );
};
export default MoviesPage;
