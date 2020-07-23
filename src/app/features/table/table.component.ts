import { Component, OnInit } from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  modules = [ClientSideRowModelModule];
  columnDefs = [
    {headerName: 'Name', field: 'name', sortable: true, filter: true},
    {headerName: 'Username', field: 'username', sortable: true, filter: true},
    {headerName: 'Email', field: 'email', sortable: true, filter: true}
  ];

  rowData$

  ngOnInit(): void {
    this.rowData$ = this.usersService.getUsers()
  }

}
