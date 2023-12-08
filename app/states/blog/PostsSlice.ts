import { BlogPost } from '@/components/types'
import { HYDRATE } from 'next-redux-wrapper'
import { POSTS_GET_LIST, POSTS_UPDATE_LIST } from './Actions'

const initialState: BlogPost[] = []

export const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return [...state, ...action.payload.posts]
    case POSTS_GET_LIST:
      return action.payload
    case POSTS_UPDATE_LIST:
      return action.payload
    default:
      return state
  }
}
