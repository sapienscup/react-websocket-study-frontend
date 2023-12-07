import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from '../states/blog/postsReducer'
import { createWrapper } from 'next-redux-wrapper'

export const store = configureStore({
  reducer: postsReducer
})
const makeStore = () =>
configureStore({
  reducer: {
    ['post']: postsReducer,
  },
  devTools: true,
});