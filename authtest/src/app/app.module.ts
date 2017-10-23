import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

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
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, canActivate: [LoginRedirect] },
      { path: 'status', component: StatusComponent, canActivate: [EnsureAuthenticated] },
      { path: 'logout', component: LogoutComponent, canActivate: [EnsureAuthenticated] }
    ])
  ],
  providers: [
    AuthService,
    LoginRedirect,
    EnsureAuthenticated
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
