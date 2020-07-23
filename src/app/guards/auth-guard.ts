import { Injectable, OnDestroy } from '@angular/core';
import { Route, UrlSegment, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { takeUntil } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {
  user
  destroySubject$ = new Subject()
  
  constructor(private authService: AuthService, private router: Router) {
    this.authService.user.pipe(
        takeUntil(this.destroySubject$)
      ).subscribe(user => {
          this.user = user
      })

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    
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