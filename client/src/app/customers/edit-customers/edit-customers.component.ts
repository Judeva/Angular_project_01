import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { ICustomer } from 'src/app/interface/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css'],
})
export class EditCustomersComponent implements OnInit {
  customerId: string = '';
  customer: any;

  name:String='';

    editFormGroup: FormGroup = this.formBuilder.group({
    firstName: new FormControl('', [ ]),
    lastName: new FormControl('', [Validators.required ]),
    emailAddress: new FormControl('', [Validators.email]),
    phoneNumber: new FormControl('', [Validators.max(14)]),
    department: new FormControl('', [Validators.required]),
    
  });
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  
   ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.customerId = data['id'];
    });

    this.customer=this.customerService.getCustomerById$(this.customerId)
    .subscribe(data=>{
      this.customer.lastName = data.lastName;
      this.customer.emailAddress = data.emailAddress;
      this.customer.firstName = data.firstName;
      this.customer.department = data.department;
      this.customer.dob = data.dob
      this.customer.phoneNumber = data['phoneNumber'];
      console.log(this.customer);
      });
  }

handleEdit(){

  console.log(this.editFormGroup.value);

  let newCustomerDetails : ICustomer= {
    userid: this.customerId,
    firstName: this.editFormGroup.value.firstName,
    lastName: this.editFormGroup.value.lastName,
    emailAddress: this.editFormGroup.value.emailAddress,
    phoneNumber:this.editFormGroup.value.phoneNumber,
    department: this.editFormGroup.value.department,
    dob:this.editFormGroup.value.dob
  };

  console.log(newCustomerDetails);

  this.customer=this.customerService.editCustomer(this.customerId, newCustomerDetails)
    .subscribe(data=>{
      this.customer=data['results'];  
      console.log(data); 
      console.log(this.customer)
      });

  // let url = environment.CUSTOMERS_BASE_URL+environment.CUSTOMER.EDIT_CUSTOMER+this.customerId;
  // return this.customer= this.httpClient.patch<ICustomer>(url, newCustomerDetails);

}

}
