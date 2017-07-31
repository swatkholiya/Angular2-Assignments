import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {

  showViewStatus = false;
  message = "Some extra user information!!";
  title = "This is USER Component! [Child of ROOT]";

  @Input('userList') userList;
  @Output('msgToParent') msgToParent = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  showAlertMsgToParent() {
    this.msgToParent.emit("This is alert msg passed from child component i.e user to parent component");
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
