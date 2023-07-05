import { configureStore } from '@reduxjs/toolkit'
import authSlice  from '../authReducer/auth'
import firestoreSlice from '../firestoreReducers/firestore'

export const store = configureStore({
    reducer:{
        authentication:authSlice,
        firestore:firestoreSlice
    }
  })