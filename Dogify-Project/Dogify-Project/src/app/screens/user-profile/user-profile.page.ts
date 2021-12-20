import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {


password : any;
user_address : any;
user_cn : any;
user_fullname : any;
user_id : any;
user_image : any;
user_email : any;
  image: string;
  imgdb: string;


  constructor(private alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Edit Avatar',
      
      buttons: ['Add Photo', 'Cancel'] 
    });

    await alert.present();
  }

  async saveChanges() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Confirm Changes?',
      
      buttons: ['Confirm', 'Cancel'] 
    });

    await alert.present();
  }


  ngOnInit() {
    this.showUserinfor()
  }

  showUserinfor(){
     this.password = JSON.parse(localStorage.getItem('currentUser')).password;
     this.user_address = JSON.parse(localStorage.getItem('currentUser')).user_address;
     this.user_cn = JSON.parse(localStorage.getItem('currentUser')).user_cn;
     this.user_fullname = JSON.parse(localStorage.getItem('currentUser')).user_fullname;
     this.user_id = JSON.parse(localStorage.getItem('currentUser')).user_id;
     this.user_image = JSON.parse(localStorage.getItem('currentUser')).user_image;
     this.image =  "http://localhost/Dogify-Project/API/Uploads/" + this.user_image;
     this.user_email = JSON.parse(localStorage.getItem('currentUser')).user_email;
  }
}
