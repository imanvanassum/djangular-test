import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { StatusComponent } from './components/status/status.component';

import { AuthService } from './services/auth.service';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatusComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ AuthService, EnsureAuthenticated, LoginRedirect ],
  bootstrap: [AppComponent]
})
export class AppModule { }
