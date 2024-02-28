import { cardsApi } from '@/pages/cards/api/cards.api'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cardsApi.middleware),
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
