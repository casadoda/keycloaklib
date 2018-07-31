import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { KeycloakModule } from 'keycloaklib';


@NgModule({
  imports: [
    CommonModule,
    KeycloakModule
  ],
  declarations: [
  	DashboardComponent
  	
  ],
  providers: [
  	
  ], 
  exports: [
  	DashboardComponent
  ]
})
export class DashboardModule { }
 