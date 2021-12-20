import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-switch-dog',
  templateUrl: './switch-dog.page.html',
  styleUrls: ['./switch-dog.page.scss'],
})
export class SwitchDogPage implements OnInit {

  user_id: any;
  petDetails: any;
 
  
  constructor(private _apiservices: ApiService,private router: Router) {
   
    }

  ngOnInit() {
    this.getPet();

  }

  getPet(){
      this.user_id = JSON.parse(localStorage.getItem('currentUser')).user_id;
        this._apiservices.getDetails(this.user_id).subscribe((res:any) => {
          console.log("SUCCESS",res);
          this.petDetails = res;
      });
  }
  
  navigate(pet_id){
      localStorage.setItem('pet_id',JSON.stringify(pet_id));
      this.router.navigate(['/home/listing']);
  }
}
