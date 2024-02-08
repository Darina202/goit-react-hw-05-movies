import { useState } from 'react';
import styles from './search-form.module.css';

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    query: '',
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" name="query" value={state.query} onChange={handleChange} required placeholder="Search movie" />
      <button type="submit" className={styles.btn}>
        Search
      </button>
    </form>
  );
};
export default SearchForm;
