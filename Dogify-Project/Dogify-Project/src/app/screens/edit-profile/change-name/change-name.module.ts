import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeNamePageRoutingModule } from './change-name-routing.module';

import { ChangeNamePage } from './change-name.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeNamePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ChangeNamePage]
})
export class ChangeNamePageModule {}
