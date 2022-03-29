import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginProvider } from '../domain/login/login.provider';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ],
  providers: [LoginProvider]

})
export class UiModule { }
