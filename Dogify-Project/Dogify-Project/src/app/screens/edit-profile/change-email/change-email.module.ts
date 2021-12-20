import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeEmailPageRoutingModule } from './change-email-routing.module';

import { ChangeEmailPage } from './change-email.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeEmailPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ChangeEmailPage]
})
export class ChangeEmailPageModule {}
