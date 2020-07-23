import { createReducer, on } from '@ngrx/store'

import { loadPosts, loadPostsError, loadPostsSuccess } from './posts.actions'
import { Post } from '../../../models/post.model'

export interface PostsState {
  posts: Post[],
  loading: boolean,
  loaded: boolean,
}

export const initialPostsState: PostsState = {
  posts: [],
  loading: false,
  loaded: false,
}


export const postsReducer = createReducer(
    initialPostsState,
  on(
    loadPosts,
    state => ({
      ...state,
      loaded: false,
      loading: true,
    }),
  ),
  on(
    loadPostsSuccess,
    (state, { posts }) => ({
      posts,
      loaded: true,
      loading: false,
    }),
  ),
  on(
    loadPostsError,
    (state) => ({
      ...state,
      loaded: false,
      loading: false,
    }),
  ),
)
