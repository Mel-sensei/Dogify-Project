import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../Service/api.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  
  search: any;
  user_id:any;
  pet_id:any;
  pets: any;
  
  constructor(private router: Router, private _apiservices:ApiService) {}

  ngOnInit() {
    this.getPetDetails();
  }

  

  
  getPetDetails() {

          this._apiservices.displaypet().subscribe((res:any) => {
              console.log('sucess',res);
              this.pets = res;
           });

  }
}


