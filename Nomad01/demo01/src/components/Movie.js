import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      );
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
      console.log(json.data.movies);
    }
    fetchMovie();
  }, []);

  return (
    <div>
      <h1>Movies!</h1>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 200px)",
            columnGap: "16px",
            rowGap: "16px",
          }}
        >
          {movies.map((movie) => (
            <MovieCard {...movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
