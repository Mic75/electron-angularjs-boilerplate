import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import {Boilerplate} from "./boilerplate.component";

export const BoilerplateModule = angular
  .module('boilerplate', [
    uiRouter
  ])
  .component('boilerplate', Boilerplate)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('boilerplate', {
        component: 'boilerplate'
      });
  })
  .name;