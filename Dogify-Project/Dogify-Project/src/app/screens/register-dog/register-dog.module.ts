import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterDogPageRoutingModule } from './register-dog-routing.module';

import { RegisterDogPage } from './register-dog.page';
import { SharedModule } from 'src/app/components/shared.module';

import { ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterDogPageRoutingModule,
    SharedModule,ReactiveFormsModule
  ],
  declarations: [RegisterDogPage]
})
export class RegisterDogPageModule {}
