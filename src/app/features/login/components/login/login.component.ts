import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core'

import { User } from '../../../../models/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  @Output() signupEmitter = new EventEmitter<User>()
  @Output() loginEmitter = new EventEmitter<User>()
  @Output() logoutEmitter = new EventEmitter()

  @Input() user: User

  email = ''
  password = ''

  signup() {
    this.signupEmitter.emit({
      email: this.email,
      password: this.password
    })
    this.email = this.password = ''
  }

  login() {
    this.loginEmitter.emit({
      email: this.email,
      password: this.password
    })
    this.email = this.password = ''
  }

  logout() {
    this.logoutEmitter.emit()
  }

}
