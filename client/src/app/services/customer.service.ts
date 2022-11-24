import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';
import { Customer } from '../models/customer.model';
import { ICustomer } from '../interface/Customer';
import { Observable } from 'rxjs/internal/Observable';
import { UrlHandlingStrategy } from '@angular/router';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root'})

export class CustomerService {

  customer:any;
  constructor(private httpClient: HttpClient) { }

  
  getCustomers(){
    let url = environment.CUSTOMERS_BASE_URL+environment.CUSTOMER.GET_ALL_CUSTOMERS;
    return this.httpClient.get(url);
  }

  /*viewCustomer(id: string){
    let url = environment.CUSTOMERS_BASE_URL+environment.CUSTOMER.GET_CUSTOMER+id;
    console.log(this.httpClient.get<ICustomer>(url));
    return this.httpClient.get<ICustomer>(url);*/


    getCustomerById$(id: string): Observable<ICustomer> {
      let url = environment.CUSTOMERS_BASE_URL+environment.CUSTOMER.GET_CUSTOMER+id;
      return this.httpClient.get<ICustomer>(url)
    }

    addCustomer$(body: {
      firstName: string, 
      lastName: string, 
      emailAdsress: string, 
      phoneNUmber: string, 
      dob: string, 
      department: string}) : Observable<ICustomer> {
        return this.httpClient.post<ICustomer>('http://localhsot:3000/customers/add',body);
      }

    editCustomer(id: string, customerObj: ICustomer){

      console.log(customerObj.emailAddress + "hi customer obj")
      let url = environment.CUSTOMERS_BASE_URL+environment.CUSTOMER.EDIT_CUSTOMER+id;
      return this.httpClient.patch<ICustomer>(url, customerObj);
  
    }

  }


  /*viewCustomer$(id: string): Observable<ICustomer>{
    let url = environment.CUSTOMERS_BASE_URL+ environment.CUSTOMER.GET_CUSTOMER + id;
    console.log(url+id)
    return this.httpClient.get<ICustomer>(url+id);
  }*/

 

  // deleteCustomer(id){

  // }

  // searchCustomer(keyword){

  // }

