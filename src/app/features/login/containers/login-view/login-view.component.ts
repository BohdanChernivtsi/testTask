import { Component, ChangeDetectionStrategy } from '@angular/core'

import { AuthService } from '../../../../services/auth.service'
import { User } from '../../../../models/user.model'

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginViewComponent {

  constructor(public authService: AuthService) {}

  signup(user: User) {
    this.authService.signup(user.email, user.password)
  }

  login(user: User) {
    this.authService.login(user.email, user.password)
  }

  logout() {
    this.authService.logout()
  }

}
