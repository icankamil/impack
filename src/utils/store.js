import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import counterReducer from './slices'
import { product } from './data'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [product.reducerPath]: product.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(product.middleware),
})

setupListeners(store.dispatch)
export default store
