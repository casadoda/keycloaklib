import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloaklib';

@Component({
  selector: 'kc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lib-kc';
  userName ="";


  constructor(private keycloakService: KeycloakService) {
  }

  public ngOnInit()
  {
  	this.keycloakService.isLoggedIn()
  		.then( (authenticated) => {
  			   if (authenticated)
  			   	this.userName = this.keycloakService.getUsername();
  			   else
  			   	this.userName =  "Not authenticathed";
  			}
  		)
  }

  getUserName(): string {
  		return this.userName;
  }
}
