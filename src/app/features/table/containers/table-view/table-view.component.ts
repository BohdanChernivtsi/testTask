import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

import { TableFacade } from '../../../../state/table/table.facade'

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableViewComponent implements OnInit {

  constructor(private tableFacade: TableFacade) { }

  rowData$ = this.tableFacade.tableState$

  ngOnInit(): void {
    this.tableFacade.getTableUsers()
  }
}
