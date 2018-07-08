import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  private username;
  private email;

  constructor() { 

  }

  setName(name) {
    this.username = name;
  }

  setEmail(email){
    this.email = email
  }

  getName(){
    return this.username
  }

  getEmail(){
    return this.email
  }
  
}
