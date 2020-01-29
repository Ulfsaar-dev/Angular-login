import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [ 
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing : true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
