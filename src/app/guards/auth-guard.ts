import { Injectable, OnDestroy } from '@angular/core'
import { Router, CanActivate, UrlTree } from '@angular/router'
import { Observable, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { AuthService } from '../services/auth.service'
import { User } from 'firebase'

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {
  user: User
  destroySubject$ = new Subject()

  constructor(private authService: AuthService, private router: Router) {
    this.authService.user.pipe(
        takeUntil(this.destroySubject$)
      ).subscribe(user => {
        this.user = user
      })

  }

  canActivate(): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {

      if (this.user) {
        return true
      } else {
        this.router.navigate(['/login'])
        return false
      }
  }

  ngOnDestroy() {
    this.destroySubject$.next()
    this.destroySubject$.complete()
  }
}
