import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  activeTab: string ="chats"
  users: any;
  user_id: any;
  counts: any;
  reads: any;
  user_fullname: any;
  
  constructor(private router: Router,private _apiservices:ApiService) { }

  segmentChange(e){
    this.activeTab = e.target.value;
  }

  ngOnInit() {
    this.getUser();
    console.log(this.user_id);
  }
  
  read(reciever){
    this.user_id = JSON.parse(localStorage.getItem('currentUser')).user_id;
    let data = {
      sender: this.user_id,
      reciever: reciever
    }
    console.log(data);
    this._apiservices.readMessage(data).subscribe((message:any) => {
      console.log('sucess',message);
    });
  }

  getUser(){
    this.user_fullname = JSON.parse(localStorage.getItem('currentUser')).user_fullname;

    this.user_id = JSON.parse(localStorage.getItem('currentUser')).user_id;
    console.log(this.user_id);
  
    this._apiservices.getUsermes(this.user_id).subscribe((received:any) => {
      console.log('sucess',received);
      this.users = received;
    });
    
    this._apiservices.getUsermessage(this.user_id).subscribe((ready:any) => {
      console.log('ey',ready);
      this.reads = ready;
    });
  }
 

}
