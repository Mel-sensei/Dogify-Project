import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeDogNamePage } from './change-dog-name.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeDogNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeDogNamePageRoutingModule {}
