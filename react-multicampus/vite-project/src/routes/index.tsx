import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from '@/routes/layouts/Default'
import About from '@/routes/pages/About'
import Home from '@/routes/pages/Home'
import Movie from '@/routes/pages/Movie'
import MovieDetail from '@/routes/pages/MovieDetail'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      {
        path: '/movies',
        element: <Movie />,
        children: [{ path: '/movies/:movieId', element: <MovieDetail /> }]
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
