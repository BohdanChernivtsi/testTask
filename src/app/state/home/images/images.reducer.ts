import { createReducer, on } from '@ngrx/store'

import { loadImages, loadImagesError, loadImagesSuccess } from './images.actions'

export interface ImagesState {
  images: string[],
  loading: boolean,
  loaded: boolean,
}

export const initialImagesState: ImagesState = {
  images: [],
  loading: false,
  loaded: false,
}

export const imagesReducer = createReducer(
    initialImagesState,
  on(
    loadImages,
    state => ({
      ...state,
      loaded: false,
      loading: true,
    }),
  ),
  on(
    loadImagesSuccess,
    (state, { images }) => ({
      images,
      loaded: true,
      loading: false,
    }),
  ),
  on(
    loadImagesError,
    (state) => ({
      ...state,
      loaded: false,
      loading: false,
    }),
  ),
)
