import templateUrl from './boilerplate.html';
import './boilerplate.scss';

export const Boilerplate = {
  bindings: {},
  templateUrl,
  controller: class BoilerplateComponent {
    constructor() {
      'ngInject';
    }
  }
};
