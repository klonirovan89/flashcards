import { Router } from '@/router'
import { Provider } from 'react-redux'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
