import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../Service/api.service';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController: AlertController,private fb: FormBuilder,private _apiservices: ApiService,private router: Router ) { }

  get email() {
    return this.profileForm.get('email');
  }

  get password() {
    return this.profileForm.get('password');
  }

  profileForm = this.fb.group({
    
    email: [
      '', 
    [ 
      Validators.required, 
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]
    ],

    password: [
      '', 
      [
        Validators.required,
        Validators.maxLength(20)
      ]
    ],
  });

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],

    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'maxlength', message: 'Password should not exceed at 20 characters'} 
    ]
  };

  ngOnInit() {
  }

  

  onSubmit(){
    
  }

  tryLogin(){
    let data = {
      email: this.email.value,
      password: this.password.value
    }
    if(this.profileForm.valid){
      this._apiservices.loginRequest(data).subscribe((res:any) => {
        this.presentAlert();
        this.router.navigate(['/switch-dog']);
          localStorage.setItem('currentUser',JSON.stringify(res));
          this.router.navigate(['/switch-dog']);
      });
    }else{
      this.presentAlertWrong();
       console.log("Password or Email is not valid");
    }
  }

async presentAlertWrong() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Login Failed!',
      buttons: ['try again'],
      

    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Login Successfully!',
      buttons: ['OK'],
      

    });

    await alert.present();
  }


}
