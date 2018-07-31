# Keycloaklib

The main goal of this library is to integrate with a Keycloak Server. The library provides the following features:

- A Keycloak Service which wraps the keycloak-js methods to be used in Angular, giving extra functionalities to the original functions and adding new methods to make it easier to be consumed by Angular applications.
- Generic AuthGuard implementation, so you can customize your routes limiting the access to a set of roles.
- A HttpClient that adds the authorization header to all HttpClient requests. 
- Structural directive to include the selected component if the user has one of the roles required.
- Method decorator to help protecting business methods to allowed roles.

## Install

### Add dependency

Add keycloaklib@0.1.0 to your project dependencies.

### Keycloak config file

Include in your assets the keycloak.json config file

### Initialize KeycloakLibrary

In your main module in the 'imports' section add the following reference:

KeycloakModule.forRoot()

## Usages

### AuthGuard

A generic AuthGuard, has been created to help you bootstrap your security configuration. This class already checks if the user is logged in and check if the authenticated user has any of the required roles.

Using the following routes config:
```
{
    path: '',
    component: HomeComponent      
},
{
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]  
},
{
    path: 'console',
    component: AdminComponent,
    data: {
      allowedRoles: ['admin', 'superadmin']
    }      
  }
```

* The path '' can be accessed from anonymous users and authenticated users.
* The path 'dashboard' can be accessed only from authenticated users.
* The path 'console' can be accessed only from authenticated users who have 'admin', 'superadmin' or both roles.


### AuthenticathedHttpClient

### Has Role Structural Directive

### Only For Roles Method decorator
