import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormTableRoutingModule } from './form-table-routing.module';
import { FormTableComponent } from './components/form-table/form-table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    FormTableComponent
  ],
  imports: [
    CommonModule,
    FormTableRoutingModule,
    MatTableModule
  ]
})
export class FormTableModule { }
