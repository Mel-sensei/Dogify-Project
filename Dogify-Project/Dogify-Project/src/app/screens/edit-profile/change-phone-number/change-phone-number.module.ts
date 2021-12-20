import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePhoneNumberPageRoutingModule } from './change-phone-number-routing.module';

import { ChangePhoneNumberPage } from './change-phone-number.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePhoneNumberPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ChangePhoneNumberPage]
})
export class ChangePhoneNumberPageModule {}
