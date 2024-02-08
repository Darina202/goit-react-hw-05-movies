import { useEffect, useState } from 'react';
import styles from './reviews.module.css';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/movies';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  let item;
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieReviews(movieId);
        setReview(data.results?.length ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  if (review?.length > 0) {
    return (item = review.map((rev, index) => (
      <li key={index} className={styles.item}>
        <h3 className={styles.author}>Author: {rev.author}</h3>
        <p className={styles.content}>Content: {rev.content}</p>
      </li>
    )));
  }

  return (
    <>
      {error && <p>Error {error}</p>}
      {loading && <p>...Loading</p>}
      {review?.length > 0 ? <ul className={styles.list}>{item}</ul> : <h3 className={styles.text}>We don`t have any reviews for this movie</h3>}
    </>
  );
};
export default Reviews;
