import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  firstName: string;
  id: number;
  lastName: string;
  loan: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, firstName: 'Hydrogen', lastName: "Ivanov", loan: 12.59333},
  {id: 2, firstName: 'Helium', lastName: "Todorov", loan: 500000},
  {id: 3, firstName: 'Lithium', lastName: "Petrov", loan: 15999},
  {id: 4, firstName: 'Beryllium', lastName: "Georgiev", loan: 1200},
  {id: 5, firstName: 'Boron', lastName: "Stefanov", loan: 16999},
  {id: 6, firstName: 'Carbon', lastName: "Milenov", loan: 12345},
  {id: 7, firstName: 'Nitrogen', lastName: "Topalov", loan: 10000},
  {id: 8, firstName: 'Oxygen', lastName: "Yordanov", loan: 25000},
  {id: 9, firstName: 'Fluorine', lastName: "Damianov", loan: 3700},
  {id: 10, firstName: 'Neon', lastName: "Radkov", loan: 2000},
];

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent  {
  
  displayedColumns: string[] = ['select', 'id', 'firstName', 'lastName', 'loan'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
   value: String ="";

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      console.log(this.selection.selected);
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
