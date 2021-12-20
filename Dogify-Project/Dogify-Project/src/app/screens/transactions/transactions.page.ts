import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  id: any;
  pet_id:any;
  user_id:any;
  petDetails:any;
  img:any;
  user_image:any;
  constructor( private activatedRoute: ActivatedRoute, private _apiservices:ApiService,private router: Router) { 
  }

  ngOnInit() {
     this.petProfile();
       this.user_image = JSON.parse(localStorage.getItem('currentUser')).user_image;
     this.img = "http://localhost/Dogify-Project/API/Uploads/" + this.user_image;
   }

   petProfile(){
       this.user_id = JSON.parse(localStorage.getItem('currentUser')).user_fullname;
      this.pet_id = JSON.parse(localStorage.getItem('pet_id'));

      console.log(this.pet_id );
         this._apiservices.profPet(this.pet_id).subscribe((res:any) => {
              console.log('sucess',res);
              this.petDetails = res;
           });
   }
}