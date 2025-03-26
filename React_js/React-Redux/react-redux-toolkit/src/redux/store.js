import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'
import { Provider } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})



// should be remember these steps

//step1 : create store
//step2 : wrap app component under Provider
//step3 : create Slice
//step4 : register reducer in store