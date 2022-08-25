import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    user:userReducer
  },
})



// -----------------note------

// Storage
// --user
// ---currentUser,loading,error

//this is how we are gonna use this when we need to gegt user
//store.user.currentUser