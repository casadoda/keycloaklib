import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloaklib'; 
import { AuthenticatedHttpService } from 'keycloaklib'
import {HasRoleDirective} from 'keycloaklib'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  constructor(private keycloakService:KeycloakService, private _secureArqHttp: AuthenticatedHttpService) { }

  _accessToken: string="";

  

  ngOnInit() {
  	console.log("DashboardComponent: get accessToken");
  	this.keycloakService.getToken()
  		.then( (token) => {this._accessToken= token;})
  		.catch( () => {
  			 this._accessToken = "";
  		});	 

      this.testHttp();
 
  }

  public testHttp()
  {
     let query:Promise<any> = this._secureArqHttp.get("./assets/config.json", null);

     query.then(response => {
                  console.log("test");
                    try {
                        let resp = response.json();
                        console.log("json: "+resp);                        
                    }
                    catch (Error) {
                      console.log("test");
                       console.log("testHttp e: "+Error);
                    }
                })
                .catch(error => {
                  console.log("test");
                     console.log("testHttp ec: "+Error);
                });
  }

  public getToken(): string {
  	return this._accessToken;
  }


 
  username() {
	return this.keycloakService.getUsername();
  }

  expDate() {
  	return this.keycloakService.getExpDate();
  }

  roles() {
	return this.keycloakService.getResourceRoles();
  }

  name() {
  	return this.keycloakService.getFullName();
  }

}
