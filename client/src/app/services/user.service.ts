import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLogged = false;

  constructor(private storage: StorageService) {
    // this.isLogged = this.storage.getItem('isLogged');
    // console.log('UserService#constructor');
  }

  login() {}

  logout(): void {
    this.isLogged = false;
    this.storage.setItem('isLogged', true);
  }

  register() {}
}
