import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  title = 'Tic Tac Toe';
  public isAuthenticated = false;
  constructor() { }

  ngOnInit(): void {
  }

}
