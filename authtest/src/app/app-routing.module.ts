import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { StatusComponent } from './components/status/status.component';

import { AuthService } from './services/auth.service';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginRedirect] },
  { path: 'status', component: StatusComponent, canActivate: [EnsureAuthenticated] },
  { path: 'logout', component: LogoutComponent, canActivate: [EnsureAuthenticated] }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
