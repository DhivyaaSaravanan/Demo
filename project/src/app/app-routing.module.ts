import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { DeactivateGuard } from './deactivate.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ProDetailedComponent } from './proDetailed/proDetailed.component';
import { ProductComponent } from './product/product.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { RegisterComponent } from './Register/Register.component';
import { UserRegistrationComponent } from './userRegistration/userRegistration.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'chocolate',
    component: ChocolateComponent
  },

  {
    path:'UserRegistration',
    component:UserRegistrationComponent,
    canDeactivate:[DeactivateGuard],
  },
  {
    path:'Product',
   component:ProductComponent,
   canActivate:[AuthGuard],
   canActivateChild:[AuthGuard],
  children:
  [
    {
      path:':check',
      component:ProDetailedComponent
    }
  ]
  },
  //  {
  //   path:'product/:check',
  //   component:ProDetailedComponent
  // },
  {
    path:'admin',
    component:AdminComponent
  },

  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'reactive',
    component:ReactiveComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}


