import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../authReducer/auth'

export const store = configureStore({
    reducer:{
        authentication: authSlice.reducer
    }
  })