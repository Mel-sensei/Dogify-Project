import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwitchDogPageRoutingModule } from './switch-dog-routing.module';

import { SwitchDogPage } from './switch-dog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwitchDogPageRoutingModule
  ],
  declarations: [SwitchDogPage]
})
export class SwitchDogPageModule {}
