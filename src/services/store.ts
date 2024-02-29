import { cardsApi } from '@/pages/cards/api/cards.api'
import { decksApi } from '@/pages/decks/api/decks.api'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  [cardsApi.reducerPath]: cardsApi.reducer,
  [decksApi.reducerPath]: decksApi.reducer,
})

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(decksApi.middleware, cardsApi.middleware),
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
