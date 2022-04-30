import { Component, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { emailValidator, passwordMatch } from '../util';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, emailValidator]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleRegister(): void {
    if (
      this.registerFormGroup.value.password !==
      this.registerFormGroup.value.rePassword
    ) {
      alert('Passwords doesnt match!');
      this.router.navigate(['/register']);
    }
    console.log(this.registerFormGroup.value);

    const body = {
      username: this.registerFormGroup.value.username,
      email: this.registerFormGroup.value.email,
      password: this.registerFormGroup.value.password,
    };

    this.userService.register();
    this.router.navigate(['/dashboard']);
  }
}
