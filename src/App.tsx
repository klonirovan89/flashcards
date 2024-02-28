import { Provider } from 'react-redux'

import { store } from '@/services/store'

import { Router } from './router'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
