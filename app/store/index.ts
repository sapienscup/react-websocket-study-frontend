import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from '../states/blog/PostsSlice'

export const store = configureStore({
  reducer: postsReducer
})
