import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';


import { AdminRoutingModule }       from './admin-routing.module';
import { UserComponent } from '../user/user.component';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
  ]
})
export class AdminModule {}