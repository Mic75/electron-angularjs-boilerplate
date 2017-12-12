import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.scss';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import './app.scss';

export const AppModule = angular
  .module('app', [
    ComponentsModule,
    uiRouter,
    ngMaterial,
  ])
  .component('app', AppComponent)
  .config(($stateProvider, $urlRouterProvider, $mdThemingProvider) => {
    'ngInject';
    $stateProvider
      .state('app', {
        redirectTo: 'boilerplate',
        url: '/'
      });
    
    $urlRouterProvider.otherwise('/');

    let lightGreyMap = $mdThemingProvider.extendPalette('grey', {
      '50': '#FFFFFF'
    });

    $mdThemingProvider.definePalette('lightGrey', lightGreyMap);
    $mdThemingProvider.theme('default').backgroundPalette('lightGrey', {'default': '50'});
  })
  .name;
