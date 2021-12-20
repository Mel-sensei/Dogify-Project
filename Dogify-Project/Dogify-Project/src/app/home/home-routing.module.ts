import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'listing',
        loadChildren: () =>
          import('../screens/listing/listing.module').then((m) => m.ListingPageModule
          ),
      },
      // {
      //   path: 'cart',
      //   loadChildren: () =>
      //     import('../screens/cart/cart.module').then((m) => m.CartPageModule),
      // },
      {
        path: 'transactions',
        loadChildren: () =>
          import('../screens/transactions/transactions.module').then((m) => m.TransactionsPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
