import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';


// export interface CustomerElement {
//   firstName: string;
//   lastName: string;
//   id: string;
//   emailAddress: string;
//   phoneNumber: string;
//   dob: string;
//   department: string;
// }



// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, firstName: 'Hydrogen', lastName: "Ivanov", loan: 12.59333},
//   {id: 2, firstName: 'Helium', lastName: "Todorov", loan: 500000},
//   {id: 3, firstName: 'Lithium', lastName: "Petrov", loan: 15999},
//   {id: 4, firstName: 'Beryllium', lastName: "Georgiev", loan: 1200},
//   {id: 5, firstName: 'Boron', lastName: "Stefanov", loan: 16999},
//   {id: 6, firstName: 'Carbon', lastName: "Milenov", loan: 12345},
//   {id: 7, firstName: 'Nitrogen', lastName: "Topalov", loan: 10000},
//   {id: 8, firstName: 'Oxygen', lastName: "Yordanov", loan: 25000},
//   {id: 9, firstName: 'Fluorine', lastName: "Damianov", loan: 3700},
//   {id: 10, firstName: 'Neon', lastName: "Radkov", loan: 2000},
// ];

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customerResult: any;
  customerList: any;

  constructor(private customerService: CustomerService){}

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList(){
    this.customerService.getCustomers().subscribe(data=>{
      this.customerResult=data;
      this.customerList = this.customerResult.results;
      console.log(this.customerList);
    })
  }
  
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'emailAddress', 'phoneNumber', 'dob', 'department'];
  dataSource = this.getCustomerList();
  value: String ="";
  selection = new SelectionModel<Customer>(false, []);

  
}
