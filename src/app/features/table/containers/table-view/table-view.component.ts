import { Component, OnInit } from '@angular/core';


import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  rowData$

  ngOnInit(): void {
    this.rowData$ = this.usersService.getUsers()
  }

}
