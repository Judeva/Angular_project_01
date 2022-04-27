import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

import { AddCustomersComponent } from './add-customers/add-customers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { DeleteCustomersComponent } from './delete-customers/delete-customers.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    AddCustomersComponent,
    EditCustomersComponent,
    DeleteCustomersComponent,
    SearchCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class CustomersModule { }
