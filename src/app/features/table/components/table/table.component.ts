import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  modules = [ClientSideRowModelModule];
  columnDefs = [
    {headerName: 'Name', field: 'name', sortable: true, filter: true},
    {headerName: 'Username', field: 'username', sortable: true, filter: true},
    {headerName: 'Email', field: 'email', sortable: true, filter: true}
  ];

  @Input() rowData
}
