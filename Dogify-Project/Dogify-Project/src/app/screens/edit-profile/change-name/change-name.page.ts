import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../Service/api.service';

import {FormBuilder,
        Validators
      } from '@angular/forms';


@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.page.html',
  styleUrls: ['./change-name.page.scss'],
})
export class ChangeNamePage implements OnInit {

  constructor(private _apiservices: ApiService,private fb: FormBuilder) { }

  
password : any;
user_address : any;
user_cn : any;
user_id : any;
user_image : any;
email:any;
fullname:any;

  ngOnInit() {
    this.fullname = JSON.parse(localStorage.getItem('currentUser')).user_fullname;

  }

  get fname() {
    return this.profileForm.get('fname');
  }
  get lname() {
    return this.profileForm.get('lname');
  }

  profileForm = this.fb.group({
    fname: [
      '', 
    [ 
      Validators.required]
    ],
    lname: [
      '', 
    [Validators.required]
    ],
  });



  updateUser(){
     this.password = JSON.parse(localStorage.getItem('currentUser')).password;
     this.user_address = JSON.parse(localStorage.getItem('currentUser')).user_address;
     this.user_cn = JSON.parse(localStorage.getItem('currentUser')).user_cn;
     this.user_id = JSON.parse(localStorage.getItem('currentUser')).user_id;
     this.user_image = JSON.parse(localStorage.getItem('currentUser')).user_image;
     this.email = JSON.parse(localStorage.getItem('currentUser')).user_email;
  

      let data = {
          password: this.password,
          user_address: this.user_address,
          user_cn: this.user_cn,
          user_fullname: this.fname.value + this.lname.value,
          user_id: this.user_id,
          user_image: this.user_image,
          user_email: this.email
      }
          console.log(data);
        this._apiservices.updateUser(data).subscribe((res:any) => {
             console.log('Success',res);
            localStorage.removeItem('currentUser');
            localStorage.setItem('currentUser', JSON.stringify(res));
          });
  }

}
