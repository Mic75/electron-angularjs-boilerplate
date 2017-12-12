import angular from 'angular';
import { BoilerplateModule } from './boilerplate/boilerplate.module';

export const ComponentsModule = angular
  .module('app.components', [
    BoilerplateModule
  ])
  .name;
