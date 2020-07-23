import { HttpClientModule } from '@angular/common/http'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { NxModule } from '@nrwl/nx'
import { StoreModule } from '@ngrx/store'

import { environment } from '../../environments/environment'
import { StateModule } from '../state/state.module'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    StateModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot([]),
    NxModule.forRoot(),
    HttpClientModule,

    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only')
    }
  }
}
