import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProDetailedComponent } from './proDetailed/proDetailed.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditItComponent } from './editIt/editIt.component';
import { AdminComponent } from './admin/admin.component';
import { UserRegistrationComponent } from './userRegistration/userRegistration.component';
import { RegisterComponent } from './Register/Register.component';
import { DeactivateGuard } from './deactivate.guard';
import { UserService } from './user.service';
import { ReactiveComponent } from './reactive/reactive.component';
import { ChocolateComponent } from './chocolate/chocolate.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      LoginComponent,
      ProductComponent,
      ProDetailedComponent,
      PageNotFoundComponent,
      EditItComponent,
      AdminComponent,
      UserRegistrationComponent,
      RegisterComponent,
      ReactiveComponent,
      ChocolateComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers:[DeactivateGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }



