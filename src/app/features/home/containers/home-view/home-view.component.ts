import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs'

import { HomeFacade } from 'src/app/state/home/home.facade';
import { PostsState } from 'src/app/state/home/posts/posts.reducer';
import { ImagesState } from 'src/app/state/home/images/images.reducer';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
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
