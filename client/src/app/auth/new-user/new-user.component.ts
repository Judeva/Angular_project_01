import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  title = 'Tic Tac Toe';
  public isAuthenticated = false;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);



  constructor() { }

  ngOnInit(): void {

  }

}
