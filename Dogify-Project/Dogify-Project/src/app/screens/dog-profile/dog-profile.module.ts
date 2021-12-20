import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogProfilePageRoutingModule } from './dog-profile-routing.module';

import { DogProfilePage } from './dog-profile.page';
import { SharedModule } from 'src/app/components/shared.module';
import { ReactiveFormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogProfilePageRoutingModule,
    SharedModule,ReactiveFormsModule
  ],
  declarations: [DogProfilePage]
})
export class DogProfilePageModule {}
