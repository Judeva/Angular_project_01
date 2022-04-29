import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
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
  customer:  any;
  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
        this.customerId=data['id'];
    });
    
    this.customer=this.customerService.viewCustomer(this.customerId)
    .subscribe(data=>{
      this.customer=data['results'];  
      console.log(data); 
      console.log(this.customer)
    });
  }


}
