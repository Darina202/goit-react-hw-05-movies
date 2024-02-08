import styles from './main-menu.module.css';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
