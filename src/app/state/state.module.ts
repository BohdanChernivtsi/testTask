import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { StoreKey } from './constants'
import { tableReducer } from './table/table.reducer'
import { homeReducers } from './home/home.reducer'
import { TableEffects } from './table/table.effects'
import { ImagesEffects } from './home/images/images.effects'
import { PostsEffects } from './home/posts/posts.effects'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      PostsEffects,
      ImagesEffects,
      TableEffects,
    ]),
    StoreModule.forFeature(StoreKey.Home, homeReducers),
    StoreModule.forFeature(StoreKey.Table, tableReducer),
  ],
})
export class StateModule { }
