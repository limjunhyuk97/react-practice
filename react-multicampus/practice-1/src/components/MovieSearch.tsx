import { useMovieStore } from '@/stores/movies'
import { useState } from 'react'

// 영화 검색기능 별도로 모듈화
export default function MovieSearch() {
  const [searchText, setSearchText] = useState('')
  const fetchMovies = useMovieStore(state => state.fetchMovies)

  return (
    <>
      {' '}
      <input
        value={searchText}
        onChange={e => {
          setSearchText(e.target.value)
        }}
        onKeyDown={e => e.key === 'Enter' && fetchMovies(searchText)}
      />
      <button onClick={() => fetchMovies}>영화 가져오기</button>
    </>
  )
}
