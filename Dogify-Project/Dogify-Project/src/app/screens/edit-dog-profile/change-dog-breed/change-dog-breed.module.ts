import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeDogBreedPageRoutingModule } from './change-dog-breed-routing.module';

import { ChangeDogBreedPage } from './change-dog-breed.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeDogBreedPageRoutingModule,
    SharedModule
  ],
  declarations: [ChangeDogBreedPage]
})
export class ChangeDogBreedPageModule {}
