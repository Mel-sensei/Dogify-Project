import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterDogPage } from './register-dog.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterDogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterDogPageRoutingModule {}
