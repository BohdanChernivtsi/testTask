import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs'

import { PostsService } from '../../../../services/posts.service';
import { ImagesService } from '../../../../services/images.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  sliderData$
  constructor(private postsService: PostsService, private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.sliderData$ = combineLatest([this.postsService.getPosts(), this.imagesService.getImages()])
      .pipe(
        map((data: [[], []]) => ({ posts: data[0].slice(0, 5), images: data[1] }))
      )
  }
}
