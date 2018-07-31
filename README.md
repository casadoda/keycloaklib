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

### Guard

### AuthenticathedHttpClient

### Has Role Structural Directive

### Only For Roles Method decorator
