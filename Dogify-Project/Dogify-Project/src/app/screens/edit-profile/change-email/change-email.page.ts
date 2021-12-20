import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Service/api.service';

import {FormBuilder,
        Validators
      } from '@angular/forms';


@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.page.html',
  styleUrls: ['./change-email.page.scss'],
})
export class ChangeEmailPage implements OnInit {

password : any;
user_address : any;
user_cn : any;
user_fullname : any;
user_id : any;
user_image : any;
em : any;

  constructor(private _apiservices: ApiService,private fb: FormBuilder) { }

  ngOnInit() {
    this.em = JSON.parse(localStorage.getItem('currentUser')).user_email;
  }  

  get email() {
    return this.profileForm.get('email');
  }

  profileForm = this.fb.group({
    email: [
      '', 
    [ 
      Validators.required, 
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]
    ],
   
 

   

  });



  updateUser(){
     this.password = JSON.parse(localStorage.getItem('currentUser')).password;
     this.user_address = JSON.parse(localStorage.getItem('currentUser')).user_address;
     this.user_cn = JSON.parse(localStorage.getItem('currentUser')).user_cn;
     this.user_fullname = JSON.parse(localStorage.getItem('currentUser')).user_fullname;
     this.user_id = JSON.parse(localStorage.getItem('currentUser')).user_id;
     this.user_image = JSON.parse(localStorage.getItem('currentUser')).user_image;
    
    
  

      let data = {
          password: this.password,
          user_address: this.user_address,
          user_cn: this.user_cn,
          user_fullname: this.user_fullname,
          user_id: this.user_id,
          user_image: this.user_image,
          user_email: this.email.value
      }
      console.log(data);
    this._apiservices.updateUser(data).subscribe((res:any) => {
             console.log('Success',res);
            localStorage.removeItem('currentUser');
            localStorage.setItem('currentUser', JSON.stringify(res));
          });
  }

}
