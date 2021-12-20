import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  
  id: any;
  pets:any;
  petDetails:any;
  user:any;
  userInfo: any;
  userPhoto: any;
  sender: any;
  r: any;

  constructor(private _apiservices:ApiService,  private activatedRoute: ActivatedRoute, private toastCtrl: ToastController) 
  {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.user = +this.activatedRoute.snapshot.paramMap.get('user');
  }

  ngOnInit() {
     this.displayOtherpet();
     this.checkMessage();
  }

  displayOtherpet(){

    this._apiservices.getUser(this.user).subscribe((user:any) => {
              console.log('sucess',user);
              this.userInfo = user;
              console.log(this.userInfo);
           });

    this._apiservices.profPet(this.id).subscribe((res:any) => {
              console.log('sucess',res);
              this.petDetails = res;
           });
  }

  checkMessage(){
    this.sender = JSON.parse(localStorage.getItem('currentUser')).user_id;

    let data = {
      sender: this.sender,
      reciever: this.user 
    }
    this._apiservices.getReceiver(data).subscribe((received:any) => {
      this.r = received;
      console.log('wew',this.r);
      },(error) => {
        console.log("No message yet")
    });
  }
}
