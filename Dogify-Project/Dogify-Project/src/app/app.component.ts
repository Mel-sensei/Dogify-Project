import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  email:any;
  name:any;
  image: any;
  imgdb: any;

  constructor() {
  }

  ngOnInit() {
     this.diplayInfo();
  }


  diplayInfo(){
   this.name = JSON.parse(localStorage.getItem('currentUser')).user_fullname;
   this.email = JSON.parse(localStorage.getItem('currentUser')).user_email;
   this.imgdb = JSON.parse(localStorage.getItem('currentUser')).user_image;
   this.image =  "http://localhost/Dogify-Project/API/Uploads/" + this.imgdb;
  }
}
