import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from '@ag-grid-community/angular'

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class TableModule { }
