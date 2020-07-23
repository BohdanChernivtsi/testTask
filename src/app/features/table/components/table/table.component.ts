import { Component, ChangeDetectionStrategy, Input } from '@angular/core'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'

import { TableUser } from '../../../../models/table-user.model'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() rowData: TableUser[]

  modules = [ClientSideRowModelModule]
  columnDefs = [
    {headerName: 'Name', field: 'name', sortable: true, filter: true},
    {headerName: 'Username', field: 'username', sortable: true, filter: true},
    {headerName: 'Email', field: 'email', sortable: true, filter: true}
  ]
}
