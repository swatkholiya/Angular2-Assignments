import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  users: String[];
  constructor() { }

  getUsers(): String[] {
    this.users =  ['swat', 'smita' ,'vaishali' , 'lalit' , 'suyog' ,'aditya' , 'aakash'];
    return this.users;
   
  }


}
