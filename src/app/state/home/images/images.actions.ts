import { HttpErrorResponse } from '@angular/common/http'
import { createAction, props } from '@ngrx/store'

export enum ImagesActionTypes {
  LoadImages = '[Home][Images] Load Images',
  LoadImagesSuccess = '[Home][Images] Load Images Success',
  LoadImagesError = '[Home][Images] Load Images Error',
}

export const loadImages = createAction(
  ImagesActionTypes.LoadImages,
)

export const loadImagesSuccess = createAction(
  ImagesActionTypes.LoadImagesSuccess,
  props<{ images: string[] }>(),
)

export const loadImagesError = createAction(
  ImagesActionTypes.LoadImagesError,
  props<{ error: HttpErrorResponse }>(),
)
