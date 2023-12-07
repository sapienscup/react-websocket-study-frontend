import { BlogPost } from '@/components/types'
import { POSTS_GET_LIST, POSTS_UPDATE_LIST } from './actions'

export const postsUpdateList = (posts: BlogPost[]) => {
  return {
    type: POSTS_UPDATE_LIST,
    payload: posts
  }
}

export const postsGetList = (posts: BlogPost[]) => {
  return {
    type: POSTS_GET_LIST,
    payload: posts
  }
}
