import { Outlet } from 'react-router-dom'
import MovieSearch from '@/components/MovieSearch'
import MovieList from '@/components/MoveList'

export default function App() {
  return (
    <>
      <h1>영화 목록</h1>
      <MovieSearch />
      <MovieList />
      <Outlet />
    </>
  )
}
