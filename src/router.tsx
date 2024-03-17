import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { QueryLoader } from '@/components/ui/loader/qeryLoader'
import { LoginPage } from '@/pages/auth/ui/login'
import { Cards } from '@/pages/cards/ui'
import { Decks } from '@/pages/decks/ui'

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
    return <QueryLoader />
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
