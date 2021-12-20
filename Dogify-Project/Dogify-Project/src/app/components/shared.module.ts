import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';


import { BackButtonComponent } from './back-button/back-button.component'; 

@NgModule({
  declarations: [InputComponent, ButtonComponent,   BackButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputComponent, ButtonComponent,   BackButtonComponent],
})
export class SharedModule {}
