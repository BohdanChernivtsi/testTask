import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { getTableState } from './table.selectors'
import { TableState } from './table.reducer'
import { loadTableUsers } from './table.actions'

@Injectable({ providedIn: 'root' })
export class TableFacade {
  tableState$ = this.store.select(getTableState)

  constructor(private store: Store<TableState>) {}

  getTableUsers(): void {
    this.store.dispatch(loadTableUsers())
  }
}
