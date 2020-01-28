import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const userRoutes: Routes = [
  { path: 'heroes' },
  { path: 'hero/:id' }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }