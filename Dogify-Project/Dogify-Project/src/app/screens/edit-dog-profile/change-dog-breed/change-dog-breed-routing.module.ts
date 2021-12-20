import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeDogBreedPage } from './change-dog-breed.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeDogBreedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeDogBreedPageRoutingModule {}
