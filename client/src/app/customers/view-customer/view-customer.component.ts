import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { ICustomer } from 'src/app/interface/Customer';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customerId: string='';
  customer: any;


  constructor(
    private activatedRoute: ActivatedRoute, 
    private customerService: CustomerService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data) => {
      this.customerId = data['id'];
    })


     this.customer=this.customerService.getCustomerById$(this.customerId)
    .subscribe(data=>{
      console.log(data['lastName'] + "last name bee")
      this.customer.lastName = data.lastName;
      this.customer.emailAddress = data.emailAddress;
      this.customer.firstName = data.firstName;
      this.customer.department = data.department;
      this.customer.dob = data.dob
      this.customer.phoneNumber = data['phoneNumber'];
      console.log(this.customer);
      });
    };
    }
  
