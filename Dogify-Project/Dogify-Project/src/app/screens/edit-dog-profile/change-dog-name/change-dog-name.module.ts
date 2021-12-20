import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeDogNamePageRoutingModule } from './change-dog-name-routing.module';

import { ChangeDogNamePage } from './change-dog-name.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeDogNamePageRoutingModule,
    SharedModule
  ],
  declarations: [ChangeDogNamePage]
})
export class ChangeDogNamePageModule {}
