import { HttpErrorResponse } from '@angular/common/http'
import { createAction, props } from '@ngrx/store'

import { Post } from '../../../models/post.model'

export enum PostsActionTypes {
  LoadPosts = '[Home][Posts] Load Posts',
  LoadPostsSuccess = '[Home][Posts] Load Posts Success',
  LoadPostsError = '[Home][Posts] Load Posts Error',
}

export const loadPosts = createAction(
  PostsActionTypes.LoadPosts,
)

export const loadPostsSuccess = createAction(
  PostsActionTypes.LoadPostsSuccess,
  props<{ posts: Post[] }>(),
)

export const loadPostsError = createAction(
  PostsActionTypes.LoadPostsError,
  props<{ error: HttpErrorResponse }>(),
)
