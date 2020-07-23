import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from '@ag-grid-community/angular'

import { TableRoutingModule } from './table-routing.module';
import { TableViewComponent } from './containers/table-view/table-view.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [TableComponent, TableViewComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class TableModule { }
