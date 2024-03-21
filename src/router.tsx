import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { CheckEmail } from '@/components/auth/check-email'
import { ForgotPassword } from '@/components/auth/forgot-password'
import { SignUp } from '@/components/auth/sign-up'
import { Layout } from '@/components/ui/layout/layout'
import { QueryLoader } from '@/components/ui/loader/qeryLoader'
import { useMeQuery } from '@/pages/auth/api/auth-api'
import { LoginPage } from '@/pages/auth/ui/login'
import { Cards } from '@/pages/cards/ui'
import { Decks } from '@/pages/decks/ui'
import { MyProfilePage } from '@/pages/profile/profile'
import { Learn } from '@/components/auth/learn'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: '/login',
  },
  {
    element: <ForgotPassword />,
    path: '/recover-password',
  },
  {
    element: <SignUp />,
    path: '/sign-up',
  },
  {
    element: <CheckEmail />,
    path: '/check-email',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/',
  },
  {
    element: <Cards />,
    path: '/decks/:id',
  },
  {
    element: <MyProfilePage />,
    path: '/edit-profile',
  },
  {
    path: '/decks/:id/learn',
    element: <Learn />,
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
    element: <Layout />,
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
