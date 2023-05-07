import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'sidebarShow',
  initialState: {
    value: true,
  },
  reducers: {
    set: (state) => {
      state.value += 1
    },
    decrease: (state) => {
      state.value -= 1
    },
  },
})

export const { increase, decrease } = counterSlice.actions
export default counterSlice.reducer
