import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { getImagesState, getPostsState } from './home.selectors'
import { HomeState } from './home.reducer'
import { loadPosts } from './posts/posts.actions'
import { loadImages } from './images/images.actions'

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  imagesState$ = this.store.select(getImagesState)
  postsState$ = this.store.select(getPostsState)

  constructor(private store: Store<HomeState>) {}

  getImages(): void {
    this.store.dispatch(loadImages())
  }

  getPosts(): void {
    this.store.dispatch(loadPosts())
  }
}
