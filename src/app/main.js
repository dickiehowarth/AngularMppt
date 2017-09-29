class MainController {
  constructor() {
    'ngInject';

    this.time = 'hello today';
  }

}

export const main = {
  template: require('./main.html'),
  controller: MainController
};
