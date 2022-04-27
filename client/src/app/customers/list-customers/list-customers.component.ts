import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Employee } from 'src/app/interface/Employee';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {


  
  empData : Employee[] =[{
      "Id": 1,
      "FirstName": "Johannah",
      "LastName": "Kiffin",
      "Email": "jkiffin0@google.pl",
      "Gender": "F",
      "JobTitle": "Administrative Assistant I"
    }, {
      "Id": 2,
      "FirstName": "Eldin",
      "LastName": "Astbery",
      "Email": "eastbery1@geocities.jp",
      "Gender": "M",
      "JobTitle": "Senior Editor"
    }, {
      "Id": 3,
      "FirstName": "Nahum",
      "LastName": "Mounce",
      "Email": "nmounce2@vk.com",
      "Gender": "M",
      "JobTitle": "Programmer II"
    }, {
      "Id": 4,
      "FirstName": "Gallard",
      "LastName": "Standell",
      "Email": "gstandell3@europa.eu",
      "Gender": "M",
      "JobTitle": "Account Representative II"
    }, {
      "Id": 5,
      "FirstName": "Koenraad",
      "LastName": "Domleo",
      "Email": "kdomleo4@cornell.edu",
      "Gender": "M",
      "JobTitle": "Quality Control Specialist"
    }, {
      "Id": 6,
      "FirstName": "Uriah",
      "LastName": "Turbat",
      "Email": "uturbat5@aol.com",
      "Gender": "M",
      "JobTitle": "Accounting Assistant II"
    }, {
      "Id": 7,
      "FirstName": "Waldemar",
      "LastName": "Fowley",
      "Email": "wfowley6@sun.com",
      "Gender": "M",
      "JobTitle": "Account Coordinator"
    }, {
      "Id": 8,
      "FirstName": "Rodolfo",
      "LastName": "Trenchard",
      "Email": "rtrenchard7@yandex.ru",
      "Gender": "M",
      "JobTitle": "Data Coordiator"
    }, {
      "Id": 9,
      "FirstName": "Konstance",
      "LastName": "Dudek",
      "Email": "kdudek8@techcrunch.com",
      "Gender": "F",
      "JobTitle": "Administrative Assistant I"
    }, {
      "Id": 10,
      "FirstName": "Monti",
      "LastName": "Perton",
      "Email": "mperton9@youtube.com",
      "Gender": "M",
      "JobTitle": "Operator"
    }];
  
    displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Email','Gender','JobTitle'];

  constructor() { }

  ngOnInit(): void {
  }
  

}
