import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'greeting',
    pathMatch: 'full',
  },
  {
    path: 'detail/:id/:user',
    loadChildren: () =>
      import('./screens/detail/detail.module').then((m) => m.DetailPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screens/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-pass',
    loadChildren: () => import('./screens/forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./screens/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./screens/transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  
  {
    path: 'change-name',
    loadChildren: () => import('./screens/edit-profile/change-name/change-name.module').then( m => m.ChangeNamePageModule)
  },
  {
    path: 'change-email',
    loadChildren: () => import('./screens/edit-profile/change-email/change-email.module').then( m => m.ChangeEmailPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./screens/edit-profile/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'change-phone-number',
    loadChildren: () => import('./screens/edit-profile/change-phone-number/change-phone-number.module').then( m => m.ChangePhoneNumberPageModule)
  },
  {
    path: 'change-address',
    loadChildren: () => import('./screens/edit-profile/change-address/change-address.module').then( m => m.ChangeAddressPageModule)
  },
  
  {
    path: 'greeting',
    loadChildren: () => import('./screens/greeting/greeting.module').then( m => m.GreetingPageModule)
  },
  {
    path: 'switch-dog',
    loadChildren: () => import('./screens/switch-dog/switch-dog.module').then( m => m.SwitchDogPageModule)
  },
  {
    path: 'register-dog',
    loadChildren: () => import('./screens/register-dog/register-dog.module').then( m => m.RegisterDogPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./screens/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'conversation-page/:id',
    loadChildren: () => import('./screens/conversation-page/conversation-page.module').then( m => m.ConversationPagePageModule)
  },
  {
    path: 'dog-profile/:id',
    loadChildren: () => import('./screens/dog-profile/dog-profile.module').then( m => m.DogProfilePageModule)
  },
  {
    path: 'change-dog-name',
    loadChildren: () => import('./screens/edit-dog-profile/change-dog-name/change-dog-name.module').then( m => m.ChangeDogNamePageModule)
  },
  {
    path: 'change-dog-breed',
    loadChildren: () => import('./screens/edit-dog-profile/change-dog-breed/change-dog-breed.module').then( m => m.ChangeDogBreedPageModule)
  },
  {
    path: 'change-dog-age',
    loadChildren: () => import('./screens/edit-dog-profile/change-dog-age/change-dog-age.module').then( m => m.ChangeDogAgePageModule)
  },
  
  
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
