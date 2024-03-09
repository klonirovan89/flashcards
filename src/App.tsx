import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { Layout } from '@/components/ui/layout/layout'
import { store } from '@/services/store'

import { Router } from './router'

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
      <ToastContainer />
    </Provider>
  )
}
