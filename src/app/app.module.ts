import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AudiosComponent } from './audios/audios.component';
import { UsersComponent } from './users/users.component';
import { UserloginComponent } from './userlogin/userlogin.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateUserComponent,
    AudiosComponent,
    UsersComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
