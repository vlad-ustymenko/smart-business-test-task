import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import filterReducer from './slices/filterSlices'

const store = configureStore({
  reducer: { users: usersReducer, filter: filterReducer },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
