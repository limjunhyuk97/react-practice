import { create } from 'zustand'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface State {
  movies: Movie[]
  loading: boolean
  fetchMovies: (searchText: string) => Promise<void>
}

// store 정의
// - 서로 다른 컴포넌트에서 사용되는 값들 공통 값 들 밖으로 뺴기
// - "return상태값 == generic타입" 되도록 상태 정의
export const useMovieStore = create<State>(set => {
  return {
    movies: [],
    loading: false,
    fetchMovies: async searchText => {
      set({ loading: true })
      await new Promise(resolve => setTimeout(resolve, 2000))
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
      )
      const { Search } = await res.json()
      set({ movies: Search, loading: false })
    }
  }
})
