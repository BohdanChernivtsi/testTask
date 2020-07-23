import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { map } from 'rxjs/operators'
import { combineLatest } from 'rxjs'

import { HomeFacade } from '../../../../state/home/home.facade'
import { PostsState } from '../../../../state/home/posts/posts.reducer'
import { ImagesState } from '../../../../state/home/images/images.reducer'

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeViewComponent implements OnInit {
  sliderData$ = combineLatest([this.homeFacade.postsState$, this.homeFacade.imagesState$])
    .pipe(
      map((data: [PostsState, ImagesState]) => ({ posts: data[0].posts.slice(0, 5), images: data[1].images }))
    )
  constructor(private homeFacade: HomeFacade) { }

  ngOnInit(): void {
    this.homeFacade.getImages()
    this.homeFacade.getPosts()
  }
}
