import { Provider } from 'react-redux'

import { Layout } from '@/components/ui/layout/layout'

import { Router } from './router'
import { store } from './services/store'
import { ToastContainer } from 'react-toastify'

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
