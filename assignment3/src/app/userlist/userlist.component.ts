import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {

  userList = ['swat', 'smita', 'vaishali', 'lalit', 'suyog', 'aditya', 'aakash'];
  showViewStatus = false;
  message = "Some extra user information!!";

  constructor() { }

  ngOnInit() {
  }

  showHide(){
      if(this.showViewStatus == true)
        this.showViewStatus = false;
      else
        this.showViewStatus = true;

      return this.showViewStatus;
  }

  getTextColor(index : number) {
    if (index % 2 == 0)
      return "red";
    else
      return "blue";
 }


}
