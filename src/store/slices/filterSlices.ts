import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filter } from '../../interfaces/filter.interface'
import { RootState } from '../store'

const initialState: Filter = {
  name: '',
  username: '',
  email: '',
  phone: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setNameFilter: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setUserNameFilter: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setEmailFilter: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPhoneFilter: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },
    resetNameFilter: (state) => {
      state.name = ''
    },

    resetUserNameFilter: (state) => {
      state.username = ''
    },

    resetPhoneFilter: (state) => {
      state.phone = ''
    },

    resetEmailFilter: (state) => {
      state.email = ''
    },

    resetFilters: (state) => {
      state.name = ''
      state.username = ''
      state.email = ''
      state.phone = ''
    },
  },
})

export const {
  setNameFilter,
  setUserNameFilter,
  setEmailFilter,
  setPhoneFilter,
  resetEmailFilter,
  resetNameFilter,
  resetPhoneFilter,
  resetUserNameFilter,
  resetFilters,
} = filterSlice.actions

export const selectFilter = (state: RootState) => state.filter

export default filterSlice.reducer
