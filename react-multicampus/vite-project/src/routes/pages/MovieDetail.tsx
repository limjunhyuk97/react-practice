import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from '@/routes/pages/MovieDetail.module.css'

export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export default function MovieDetail() {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState<MovieDetails>({} as MovieDetails)

  useEffect(() => {
    fetchMovieDetail()
  }, [])

  /* 뒤로가기 */
  function OffModal() {
    navigate(-1)
  }

  /* Movie 가져오기 */
  async function fetchMovieDetail() {
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&i=${movieId}`)
    const movie = await res.json()
    setMovie(movie)
  }

  /* Modal 구현 */
  return (
    <div className={styles.modal}>
      <div
        className={styles.overlay}
        onClick={OffModal}></div>
      <div className={styles.contents}>
        <h1>{movie.Title}</h1>
        <img
          src={movie.Poster}
          alt={movie.Title}></img>
        <p>{movie.Plot}</p>
      </div>
    </div>
  )
}
