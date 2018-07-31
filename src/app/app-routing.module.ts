import { NgModule }             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from "./app.component";
import {DashboardModule} from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from 'keycloaklib'; 

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent    
  },
  {
    path: 'dashboard',
    component: DashboardComponent
    //,    canActivate: [AuthGuard]  
    
    //data: {
    //  allowedRoles: ['admin', 'superadmin']
    //}
    //  
  },
  {
    path: 'test',
    component: TestComponent
  }
  
];

@NgModule({
  imports: [
    DashboardModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true // <-- debugging purposes only
//,        useHash: true
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class AppRoutingModule { }