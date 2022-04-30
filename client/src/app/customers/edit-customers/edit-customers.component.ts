import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICustomer } from 'src/app/interface/Customer';
import { CustomerService } from 'src/app/services/customer.service';

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
    firstName: new FormControl('', [Validators.required ]),
    lastName: new FormControl('', [Validators.required ]),
    emailAddress: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.customerId = data['id'];
    });


    this.customer=this.customerService.viewCustomer(this.customerId)
    .subscribe(data=>{
      this.customer=data['results'];  
      console.log(data); 
      console.log(this.customer)
      });
  }

handleEdit(){

  console.log(this.editFormGroup.value);


  let newCustomerDetails : ICustomer= {
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
}



}
