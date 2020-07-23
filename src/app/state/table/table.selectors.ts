import { createFeatureSelector } from '@ngrx/store'

import { StoreKey } from '../constants'
import { TableState } from './table.reducer'

export const getTableState = createFeatureSelector<TableState>(StoreKey.Table)
