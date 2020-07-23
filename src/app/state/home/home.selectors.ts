import { createFeatureSelector, createSelector } from '@ngrx/store'

import { StoreKey } from '../constants'
import { HomeState } from './home.reducer'

const getFeatureState = createFeatureSelector<HomeState>(StoreKey.Home)

export const getImagesState = createSelector(
  getFeatureState,
  (state: HomeState) => state.images,
)

export const getPostsState = createSelector(
  getFeatureState,
  (state: HomeState) => state.posts,
)
