import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PreloadAllModules } from '@angular/router'

import { AuthGuard } from './guards/auth-guard'


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  }, {
    path: 'table',
    loadChildren: () => import('./features/table/table.module').then(m => m.TableModule),
    canActivate: [AuthGuard]
  }, {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  }, {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
