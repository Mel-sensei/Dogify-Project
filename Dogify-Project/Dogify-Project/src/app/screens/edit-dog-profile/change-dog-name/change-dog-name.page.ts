import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../Service/api.service';

@Component({
  selector: 'app-change-dog-name',
  templateUrl: './change-dog-name.page.html',
  styleUrls: ['./change-dog-name.page.scss'],
})
export class ChangeDogNamePage implements OnInit {
  id: any;
  r: any;
  responses: any;
  newname: any;

  constructor(private _apiservices:ApiService) { }

  ngOnInit() {
    this.getPet();
    console.log(this.newname);
  }

   getPet(){
    this.id = JSON.parse(localStorage.getItem('pet_id'));

      this._apiservices.getSinglePet(this.id).subscribe((received:any) => {
           console.log('response',received)
           this.responses = received;
        });
   }

   update(pet_address, pet_age, pet_bio, pet_breed, pet_gender, pet_id, pet_image, pet_stats, user_id){
      let data = {
        newname: this.newname,
        pet_address:  pet_address, 
        pet_age:      pet_age, 
        pet_bio:      pet_bio, 
        pet_breed:    pet_breed, 
        pet_gender:   pet_gender, 
        pet_id:       pet_id, 
        pet_image:    pet_image, 
        pet_stats:    pet_stats, 
        user_:        user_id
      }
      console.log(data);
      
      this._apiservices.updatePet(data).subscribe((res:any) => {
        console.log('update success',res)
      });
   }
}
