import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../../Service/api.service';
import { Router } from '@angular/router';

import { FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register-dog',
  templateUrl: './register-dog.page.html',
  styleUrls: ['./register-dog.page.scss'],
})
export class RegisterDogPage implements OnInit {

  user_id: any;
  img: any;
  file:any;
  constructor(private router: Router,private alertController: AlertController,private _apiservices: ApiService,private fb: FormBuilder) 
  {

  }


  get pet_name() {
    return this.profileForm.get('pet_name');
  }
  get address() {
    return this.profileForm.get('address');
  }
  get bio() {
    return this.profileForm.get('bio');
  }
  get breed() {
    return this.profileForm.get('breed');
  }

  get age() {
    return this.profileForm.get('age');
  }

  get gender() {
    return this.profileForm.get('gender');
  }

  get status(){
    return this.profileForm.get('status');
  }


  profileForm = this.fb.group({
    breed: ['', [Validators.required, Validators.maxLength(30)]],
    age: ['', [Validators.required, Validators.maxLength(30)]],
    gender: ['', [Validators.required, Validators.maxLength(30)]],
    status: ['', [Validators.required, Validators.maxLength(30)]],
    address: ['', [Validators.required, Validators.maxLength(30)]],
    bio: ['', [Validators.required, Validators.maxLength(30)]],
    pet_name: ['', [Validators.required, Validators.maxLength(30)]]
  });


    selectFile(event){
          this.file = event.target.files[0];
    }

   createPet(){
    this.user_id = JSON.parse(localStorage.getItem('currentUser')).user_id;

     const formData = new FormData();
    formData.append('file',this.file,this.file.name);

     this._apiservices.uploadPetimage(formData).subscribe((image:any) => {
       console.log("SUCCESS",image);
          this.img = image

          let data = {
                user_id: this.user_id,
                pet_name: this.pet_name.value,
                image: this.img,
                breed: this.breed.value,
                bio: this.bio.value,
                address: this.address.value,
                age: this.age.value,
                status: this.status.value,
                gender: this.gender.value

              }
              console.log(data);

           

          this._apiservices.creatPet(data).subscribe((res:any) => {
                 console.log("SUCCESS",res);
                   this.presentAlert();
                  this.router.navigate(['/switch-dog']);
           });
      });

  
  }
 


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Successfully Created!',
  
      buttons: ['OK']
    });

    await alert.present();
  }

 

  ngOnInit() {
  }





}
