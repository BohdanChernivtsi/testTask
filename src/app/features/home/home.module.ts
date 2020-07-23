import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'

import { HomeRoutingModule } from './home-routing.module'
import { HomeViewComponent } from './containers/home-view/home-view.component'
import { PostComponent } from './components/post/post.component'
import { HomeComponent } from './components/home/home.component'


@NgModule({
  declarations: [HomeViewComponent, PostComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCarouselModule
  ]
})
export class HomeModule { }
