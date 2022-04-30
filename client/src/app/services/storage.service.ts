import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  setItem(arg0: string, arg1: boolean) {
    throw new Error('Method not implemented.');
  }
  getItem(arg0: string): boolean {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
