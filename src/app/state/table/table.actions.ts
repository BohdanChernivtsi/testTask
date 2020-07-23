import { HttpErrorResponse } from '@angular/common/http'
import { createAction, props } from '@ngrx/store'

import { TableUser } from 'src/app/models/table-user.model'


export enum TableActionTypes {
  LoadTableUsers = '[Table] Load Users',
  LoadTableUsersSuccess = '[Table] Load Users Success',
  LoadTableUsersError = '[Table] Load Users Error',
}

export const loadTableUsers = createAction(
  TableActionTypes.LoadTableUsers,
)

export const loadTableUsersSuccess = createAction(
  TableActionTypes.LoadTableUsersSuccess,
  props<{ tableUsers: TableUser[] }>(),
)

export const loadTableUsersError = createAction(
  TableActionTypes.LoadTableUsersError,
  props<{ error: HttpErrorResponse }>(),
)
