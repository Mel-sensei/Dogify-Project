import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeDogAgePage } from './change-dog-age.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeDogAgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeDogAgePageRoutingModule {}
