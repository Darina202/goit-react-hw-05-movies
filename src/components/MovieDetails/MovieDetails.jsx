import styles from './movie-details.module.css';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'api/movies';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [picture, setPicture] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const backButton = location?.state?.from ?? '/';
  let genres;
  let avgPers;
  const defPicture = 'https://ih1.redbubble.net/image.533910704.5853/fposter,small,wall_texture,product,750x1000.u3.jpg';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieDetails(movieId);
        setPicture(data ? data : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  if (picture) {
    genres = picture.genres.map(genr => genr.name).join(', ');
    avgPers = Math.round((picture.vote_average / 10) * 100);
  }

  const goBack = () => navigate(backButton);

  return (
    <div>
      {loading && <p>...Loading</p>}
      {error && <p>Error {error}</p>}
      <button onClick={goBack} type="button" className={styles.btn}>
        Go back
      </button>
      <div className={styles.movie}>
        {picture && (
          <>
            <img
              src={picture.poster_path ? `https://image.tmdb.org/t/p/original${picture.poster_path}` : defPicture}
              alt={picture.title}
              width="400px"
            />
            <div className={styles.descr}>
              <h2 className={styles.title}>{picture.title}</h2>
              <p className={styles.data}>User score: {avgPers}%</p>
              <h4 className={styles.text}>Overwiev</h4>
              <p className={styles.data}>{picture.overview}</p>
              <h4 className={styles.text}>Genres</h4>
              <p className={styles.data}>{genres}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default MovieDetails;
