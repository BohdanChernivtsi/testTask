import { Injectable } from '@angular/core'
import { createEffect } from '@ngrx/effects'
import { DataPersistence } from '@nrwl/nx'
import { map } from 'rxjs/operators'

import { UsersService } from '../../services/users.service'
import { TableState } from './table.reducer'
import { TableActionTypes, loadTableUsersError, loadTableUsers, loadTableUsersSuccess } from './table.actions'
import { TableUser } from '../../models/table-user.model'

@Injectable()
export class TableEffects {
  images$ = createEffect(() => {
    return this.dataPersistence.fetch(
        TableActionTypes.LoadTableUsers,
      {
        run: (action: ReturnType<typeof loadTableUsers>) => {
          return this.usersService.getUsers()
            .pipe(
              map((tableUsers: TableUser[]) => loadTableUsersSuccess({ tableUsers })),
            )
        },
        onError: (action, error) => {
          return loadTableUsersError(error)
        },
      },
    )
  })

  constructor(
    private readonly dataPersistence: DataPersistence<TableState>,
    private readonly usersService: UsersService,
  ) {}
}
