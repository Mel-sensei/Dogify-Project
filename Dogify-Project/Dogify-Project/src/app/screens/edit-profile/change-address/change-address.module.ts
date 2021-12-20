import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeAddressPageRoutingModule } from './change-address-routing.module';

import { ChangeAddressPage } from './change-address.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeAddressPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ChangeAddressPage]
})
export class ChangeAddressPageModule {}
