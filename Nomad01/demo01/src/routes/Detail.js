import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const json = await response.json();
        console.log(json.data.movie);
        setMovie(json.data.movie);
        setLoading(false);
      } catch (err) {
        console.log(err);
        return null;
      }
    }
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <div>fetching..</div>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h2>{movie.description_full}</h2>
        </div>
      )}
    </div>
  );
}

export default Detail;
