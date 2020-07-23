import { Injectable } from '@angular/core'

import { of, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  getImages(): Observable<string[]> {
    return of([944, 1011, 984, 999, 989].map((n) => `https://picsum.photos/id/${n}/900/500`))
  }
}
