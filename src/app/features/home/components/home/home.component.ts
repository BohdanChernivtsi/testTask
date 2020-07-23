import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

import { PostsState } from '../../../../state/home/posts/posts.reducer'
import { ImagesState } from '../../../../state/home/images/images.reducer'

interface SliderData {
  posts: PostsState
  images: ImagesState
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  @Input() sliderData: SliderData

}
