import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchDogPage } from './switch-dog.page';

const routes: Routes = [
  {
    path: '',
    component: SwitchDogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitchDogPageRoutingModule {}
