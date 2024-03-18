import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { QueryLoader } from '@/components/ui/loader/qeryLoader'
import { useMeQuery } from '@/pages/auth/api/auth-api'
import { LoginPage } from '@/pages/auth/ui/login'
import { Cards } from '@/pages/cards/ui'
import { MyProfilePage } from '@/pages/profile/profile'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    // element: <Decks />,
    element: <Cards />,
    path: '/',
  },
  {
    element: <MyProfilePage />,
    // element: <Cards />,
    path: '/edit-profile',
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
