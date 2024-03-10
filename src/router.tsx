import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Loader } from '@/components/ui/spinner'
import { LoginPage } from '@/pages/auth/ui/login'
import { Decks } from '@/pages/decks/ui/decks'

import { useMeQuery } from './pages/auth/api/auth-api'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    // element: <Cards />,
    path: '/',
  },
]

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    // element: <Layout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  //TODO: перенести в layout
  const { isError, isLoading } = useMeQuery()

  const isAuthenticated = !isError

  if (isLoading) {
    return <Loader />
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
