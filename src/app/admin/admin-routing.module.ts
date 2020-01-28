import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
    {
      path: 'admin',
      component: AdminComponent,
      children: [
        {
          path: '',
          children: [
            { path: 'crises'},
            { path: 'heroes'},
            { path: ''}
          ]
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(adminRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AdminRoutingModule {}