import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeDogAgePageRoutingModule } from './change-dog-age-routing.module';

import { ChangeDogAgePage } from './change-dog-age.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeDogAgePageRoutingModule,
    SharedModule
  ],
  declarations: [ChangeDogAgePage]
})
export class ChangeDogAgePageModule {}
