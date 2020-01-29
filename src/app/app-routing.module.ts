import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthAdminGuard } from './guard/auth.adminguard';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [ 
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AuthAdminGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: '**',  redirectTo: '/login'},
  { path: '',  redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing : true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

