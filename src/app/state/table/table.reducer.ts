import { createReducer, on } from '@ngrx/store'

import { TableUser } from '../../models/table-user.model'
import { loadTableUsers, loadTableUsersSuccess, loadTableUsersError } from './table.actions'

export interface TableState {
  tableUsers: TableUser[]
  loading: boolean,
  loaded: boolean,
}

export const initialTableState: TableState = {
  tableUsers: [],
  loading: false,
  loaded: false,
}

export const tableReducer = createReducer(
    initialTableState,
  on(
    loadTableUsers,
    state => ({
      ...state,
      loaded: false,
      loading: true,
    }),
  ),
  on(
    loadTableUsersSuccess,
    (state, { tableUsers }) => ({
      ...state,
      tableUsers,
      loaded: true,
      loading: false,
    }),
  ),
  on(
    loadTableUsersError,
    (state) => ({
      ...state,
      loaded: false,
      loading: false,
    }),
  ),
)
