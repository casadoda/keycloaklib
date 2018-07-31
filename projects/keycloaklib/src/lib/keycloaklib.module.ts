
import { NgModule, ModuleWithProviders, Injector, APP_INITIALIZER, InjectionToken } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient  } from '@angular/common/http';



import { KeycloakService } from './keycloak.service'; 
import { AuthGuard } from './auth-guard'; 
import { HasRoleDirective } from './has-role.directive';

import { AuthenticatedHttpService } from './AuthenticatedHttpService'
import { initializer} from './startup/initializer'


export const KC_JSON_CONFIG = new InjectionToken<any>('KC_JSON_CONFIG');

@NgModule({
  imports: [CommonModule,
    HttpClientModule
  ],
  providers: [
    KeycloakService,    
    AuthenticatedHttpService,
  	AuthGuard
  ],
  declarations: [
  	HasRoleDirective
  ],
  exports: [HasRoleDirective]
})
export class KeycloakModule { 
  static forRoot(configJSON?: any): ModuleWithProviders {    
    console.log("KeycloakModule.ModuleWithProviders");
    return {
      ngModule: KeycloakModule,
      providers: [         
        {
           provide: KC_JSON_CONFIG, 
           multi: true, 
           useValue: configJSON
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [KeycloakService, HttpClient, Injector, KC_JSON_CONFIG]
        }
       ]
    };
  }

}

