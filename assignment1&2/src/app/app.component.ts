import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'This is App Component [Root Component]';
  userList = ['swat', 'smita' ,'vaishali' , 'lalit' , 'suyog' ,'aditya' , 'aakash'];
 
  showAlert(msg : String){
      alert(msg);
  }

}
