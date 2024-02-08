import styles from './home-page.module.css';
import Home from 'components/Home/Home';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
};
export default HomePage;
