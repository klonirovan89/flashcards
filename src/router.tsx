import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Loader } from '@/components/ui/spinner'
import { useGetMeQuery } from '@/pages/auth/api/auth-api'
import { LoginPage } from '@/pages/auth/ui/login'
import { Decks } from '@/pages/decks/ui/decks'

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
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { isError, isLoading } = useGetMeQuery()

  const isAuthenticated = !isError

  if (isLoading) {
    return <Loader />
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
