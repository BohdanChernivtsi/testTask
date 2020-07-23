import { ActionReducerMap } from '@ngrx/store'

import { PostsState, postsReducer } from './posts/posts.reducer'
import { ImagesState, imagesReducer } from './images/images.reducer'

export interface HomeState {
  posts: PostsState,
  images: ImagesState,
}

export const homeReducers: ActionReducerMap<HomeState> = {
  posts: postsReducer,
  images: imagesReducer,
}
