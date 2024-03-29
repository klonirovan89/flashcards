import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { CheckEmail } from '@/components/auth/check-email'
import { Learn } from '@/components/auth/learn'
import { Layout } from '@/components/ui/layout/layout'
import { QueryLoader } from '@/components/ui/loader/qeryLoader'
import { useMeQuery } from '@/pages/auth/api/auth-api'
import { CreateNewPasswordPage } from '@/pages/auth/ui/create-new-password'
import { LoginPage } from '@/pages/auth/ui/login'
import { ForgotPasswordPage } from '@/pages/auth/ui/password-recovery'
import { SignUpPage } from '@/pages/auth/ui/sign-up'
import { Cards } from '@/pages/cards/ui'
import { Decks } from '@/pages/decks/ui'
import { MyProfilePage } from '@/pages/profile/profile'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginPage />,
    path: '/login',
  },
  {
    element: <ForgotPasswordPage />,
    path: '/recover-password',
  },
  {
    element: <SignUpPage />,
    path: '/sign-up',
  },
  {
    element: <CheckEmail />,
    path: '/check-email/:email',
  },
  {
    element: <CreateNewPasswordPage />,
    path: '/create-new-password/:token',
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
    element: <Learn />,
    path: '/decks/:id/learn',
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
