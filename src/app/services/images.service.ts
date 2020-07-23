import { Injectable } from '@angular/core';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  getImages() {
    return of([944, 1011, 984, 999, 989].map((n) => `https://picsum.photos/id/${n}/900/500`))
  }
}
