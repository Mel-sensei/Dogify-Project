import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from '../../Service/api.service';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.page.html',
  styleUrls: ['./dog-profile.page.scss'],
})
export class DogProfilePage implements OnInit {


  pet_id: any;
  petDetails:any;
  id:any;user_id:any;
  img:any;
  file:any;
  constructor( 
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute, 
    private _apiservices:ApiService,
    private router: Router,
    private alertController: AlertController)
    {
      this.id = +this.activatedRoute.snapshot.paramMap.get('id');
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

  get status() {
    return this.profileForm.get('status');
  }

  get address(){
    return this.profileForm.get('address');
  }

  get pet_name() {
    return this.profileForm.get('pet_name');
  }
  get bio() {
    return this.profileForm.get('bio');
  }
  get stats() {
    return this.profileForm.get('stats');
  }

  profileForm = this.fb.group({
    breed: ['', [Validators.required, Validators.maxLength(30)]],
    age: ['', [Validators.required, Validators.maxLength(30)]],
    gender: ['', [Validators.required, Validators.maxLength(30)]],
    status: ['', [Validators.required, Validators.maxLength(30)]],
    address: ['', [Validators.required, Validators.maxLength(30)]],
    bio: ['', [Validators.required, Validators.maxLength(30)]],
    stats: ['', [Validators.required, Validators.maxLength(30)]],
    pet_name: ['', [Validators.required, Validators.maxLength(30)]]
  });

    ngOnInit() {
      this. getPet()
    }
    
    getPet(){
      this.user_id = JSON.parse(localStorage.getItem('currentUser')).user_id;
        console.log('sucess',this.id);
        this._apiservices.profPet(this.id).subscribe((res:any) => {
            console.log('sucess',res);
            this.petDetails = res;
         });

    } 
    selectFile(event){
          this.file = event.target.files[0];
    }


    saveUpdate(){
 
          this.user_id = JSON.parse(localStorage.getItem('currentUser')).user_id;

           const formData = new FormData();
          formData.append('file',this.file,this.file.name);

          this._apiservices.uploadPetimage(formData).subscribe((image:any) => {
             console.log("SUCCESS",image);
                this.img = image;

               let data = {
                          pet_id: this.id,
                          image: this.img,
                          user_id: this.user_id,
                          pet_name: this.pet_name.value,
                          breed: this.breed.value,
                          bio: this.bio.value,
                          address: this.address.value,
                          age: this.age.value,
                          status: this.stats.value,
                          gender: this.gender.value
                        }
                   console.log(data);
                  this._apiservices.updatePet(data).subscribe((res:any) => {
                           console.log("SUCCESS",res);
                     });
              });

            this.saveChanges();
    }


  async saveChanges() {
    const alert = await this.alertController.create({
      cssClass: 'basic-alert',
      header: 'Update Successful',
      
      buttons: ['Ok'] 
    });

    await alert.present();
  }


}
