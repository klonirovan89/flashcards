import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { Router } from './router'
import { store } from './services/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer />
    </Provider>
  )
}
