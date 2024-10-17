import { Link } from 'react-router-dom'
import TheLoader from '@/components/TheLoader'
import { useMovieStore } from '@/stores/movies'

export default function MovieList() {
  const movies = useMovieStore(state => state.movies)
  const loading = useMovieStore(state => state.loading)
  return (
    <>
      {' '}
      {loading && <TheLoader />}
      <div>
        {/* 1. Link로 이동하는 페이지 위치는 createBrowserRouter에 정해짐*/}
        {/* 2. 현재는 Movie 페이지의 Children으로 전달되게 했음*/}
        {/* 3. 전달된 Children은 Outlet 위치에 만들어지게 되는 것*/}
        {movies.map(movie => {
          return (
            <Link
              key={movie.imdbID}
              to={`/movies/${movie.imdbID}`}>
              <div>{movie.Title}</div>
              <img
                src={movie.Poster}
                alt={movie.Title}
                width="120"
              />
            </Link>
          )
        })}
      </div>
    </>
  )
}
