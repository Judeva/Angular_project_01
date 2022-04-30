import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';



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
