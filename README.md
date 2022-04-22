# VolanteSlottrak

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

There are multiple applications in this repo

```
@volante-app/san-manuel (default)
@volante-app/cache-creek
@volante-app/rt66
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

commands for the different applications
```
  ng serve @volante-app/san-manuel
  ng serve @volante-app/cache-creek
  ng serve @volante-app/rt66
```

## Code scaffolding

Run `ng generate --project @volante/slottrak-app slottrak-app/components component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Application notes

A SlotTrak application is composed by importing feature config modules (e.g.  `SlottrakMachinesConfigModule` from `@volante/slottrak-machines`, `SlottrakMealLogConfigModule` from `@volante/slottrak-meal-log`, or `SlottrakMachinesProgressivesModule` from `@volante/slottrak-progressives`)

Each library has multiple entry points supported by using ng-packagr at the different levels.  This generates multiple entry points for each library which allows the main app entry module to contain the config modules and for the other parts to be lazy loaded when appropriate.  The primary public-api.ts files don't declare anything, they just export other exported objects allowing tree-shaking to occur.
