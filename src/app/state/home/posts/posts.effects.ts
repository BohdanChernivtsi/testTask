import { Injectable } from '@angular/core'
import { createEffect } from '@ngrx/effects'
import { DataPersistence } from '@nrwl/nx'
import { map } from 'rxjs/operators'

import { PostsService } from '../../../services/posts.service'
import { PostsActionTypes, loadPosts, loadPostsSuccess, loadPostsError } from './posts.actions'
import { PostsState } from './posts.reducer'
import { Post } from 'src/app/models/post.model'

@Injectable()
export class PostsEffects {
  posts$ = createEffect(() => {
    return this.dataPersistence.fetch(
        PostsActionTypes.LoadPosts,
      {
        run: (action: ReturnType<typeof loadPosts>) => {
          return this.postsService.getPosts()
            .pipe(
              map((posts: Post[]) => loadPostsSuccess({ posts })),
            )
        },
        onError: (action, error) => {
          return loadPostsError(error)
        },
      },
    )
  })

  constructor(
    private readonly dataPersistence: DataPersistence<PostsState>,
    private readonly postsService: PostsService,
  ) {}
}
