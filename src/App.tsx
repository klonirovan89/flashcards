import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { store } from '@/services/store'

import { Router } from './router'

export function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router />
    </Provider>
  )
}
