import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { TableBody } from '../../interfaces/user.interface'

const initialState: TableBody[] = []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<TableBody[]>): TableBody[] => {
      return action.payload
    },
  },
})

// export const { setCountUpdate } = booksSlice.actions
export const { setUsers } = usersSlice.actions

export const selectUsersList = (state: RootState) => state.users

export default usersSlice.reducer
