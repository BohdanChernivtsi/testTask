import { Injectable } from '@angular/core'
import { createEffect } from '@ngrx/effects'
import { DataPersistence } from '@nrwl/nx'
import { map } from 'rxjs/operators'

import { ImagesService } from '../../../services/images.service'
import { ImagesActionTypes, loadImages, loadImagesSuccess, loadImagesError } from './images.actions'
import { ImagesState } from './images.reducer'

@Injectable()
export class ImagesEffects {
  images$ = createEffect(() => {
    return this.dataPersistence.fetch(
        ImagesActionTypes.LoadImages,
      {
        run: (action: ReturnType<typeof loadImages>) => {
          return this.imagesService.getImages()
            .pipe(
              map((images) => loadImagesSuccess({ images })),
            )
        },
        onError: (action, error) => {
          return loadImagesError(error)
        },
      },
    )
  })

  constructor(
    private readonly dataPersistence: DataPersistence<ImagesState>,
    private readonly imagesService: ImagesService,
  ) {}
}
