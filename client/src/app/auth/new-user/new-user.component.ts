import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  registerFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, emailValidator]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
      passwords: new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      rePassword: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    }),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleRegister(): void {
    console.log(this.registerFormGroup);
    this.userService.login();
    this.router.navigate(['/dashboard']);
  }
}
