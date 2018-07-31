import { Injectable } from '@angular/core';
import {KeycloakService} from './keycloak.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpOptions} from './httpOptions';

/**
* The authenticated http service is a service for doing http request
* with a configured authentication token in header.
**/
@Injectable() 
export class AuthenticatedHttpService {

    
    
    /** 
    * @param http Http service base [[HttpService]] that will be called with decorated
    * options - authentication token in header.
    **/
    constructor(private http: HttpClient, private keycloakService: KeycloakService) {
    }


    /** 
    * Http GET request
    * @param url resource url
    * @param options request options
    **/
    public get(url: string, options: HttpOptions = new HttpOptions()): Promise<any> {      
      if (!options)
        options = new HttpOptions();

      return new Promise((resolve, reject) => {         
        this.configureAuthenticationHeaderIn(options).then( () => {          
          return this.http.get(url, options).subscribe ( 
              (any) => {resolve(any)},
              (error) => {reject(error)}
            );
        });
      });        
    }

    /** 
    * Http POST request with authentication
    * @param url resource url
    * @param options request options
    **/
    post(url: string, options: HttpOptions = new HttpOptions()): Promise<any> {
      if (!options)
        options = new HttpOptions();
      return new Promise((resolve, reject) => {         
        this.configureAuthenticationHeaderIn(options).then( () => {
          return this.http.post(url, options).subscribe(
            (any) => {resolve(any)},
            (error) => {reject(error)}
           );
        });
      });
    }

    /** 
    * Http PUT request with authentication
    * @param url resource url
    * @param options request options
    **/
    
    put(url: string, options: HttpOptions = new HttpOptions()): Promise<any> {
        if (!options)
          options = new HttpOptions();
        return new Promise((resolve, reject) => {         
        this.configureAuthenticationHeaderIn(options).then( () => {
          return this.http.put(url, options).subscribe ( 
              (any) => {resolve(any)},
              (error) => {reject(error)}
             );
        });
      });
    }

    /** 
    * Http DELETE request with authentication
    * @param url resource url
    * @param options request options
    **/
    
    delete(url: string, options: HttpOptions = new HttpOptions()): Promise<any> {
        if (!options)
          options = new HttpOptions();
        return new Promise((resolve, reject) => {         
        this.configureAuthenticationHeaderIn(options).then( () => {
          return this.http.delete(url, options).subscribe( 
              (any) => {resolve(any)},
              (error) => {reject(error)}
             );
        });
      });
    }

    /** 
    * Http PATCH request with authentication
    * @param url resource url
    * @param options request options
    **/
    
    patch(url: string, body: any, options: HttpOptions = new HttpOptions()): Promise<any> {
        if (!options)
          options = new HttpOptions();
        return new Promise((resolve, reject) => {         
        this.configureAuthenticationHeaderIn(options).then( () => {
          return this.http.patch(url, options).subscribe ( 
              (any) => {resolve(any)},
              (error) => {reject(error)}
             );
        });
      });
    }
    

    private configureAuthenticationHeaderIn(options: HttpOptions = new HttpOptions()): Promise<any> {
        return new Promise((resolve, reject) => {      
          this.keycloakService.getToken()
            .then( (token) => {
                options.headers.append("Authorization", `Bearer ${token}`);
                resolve();
            }).catch( (error) => {               
               throw new Error(`[AuthenticatedHttpService]: ` +
                `you can't use this service without token.`+ error);
            });
         });  


    }
}
