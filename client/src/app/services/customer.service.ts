import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';
import { Customer } from '../models/customer.model';
import { ICustomer } from '../interface/Customer';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer:any;
  constructor(private httpClient: HttpClient) { }

  
  getCustomers(){

    let url = environment.CUSTOMERS_BASE_URL+environment.CUSTOMER.GET_ALL_CUSTOMERS;
    return this.httpClient.get(url);
  }

  viewCustomer(id: string){
    let url = environment.CUSTOMERS_BASE_URL+environment.CUSTOMER.GET_CUSTOMER+id;

    console.log(this.httpClient.get<ICustomer>(url))
    return this.httpClient.get<ICustomer>(url);
  }

  editCustomer(id: string, customerObj: ICustomer){

    console.log(customerObj.emailAddress + "hi customer obj")
    let url = environment.CUSTOMERS_BASE_URL+environment.CUSTOMER.EDIT_CUSTOMER+id;
    return this.httpClient.patch<ICustomer>(url, customerObj);

  }

  // deleteCustomer(id){

  // }

  // searchCustomer(keyword){

  // }

}
