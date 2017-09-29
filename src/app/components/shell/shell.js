class ShellController {

  constructor($log) {
    'njInject';
    $log.log('hello world');

    this.name = 'ShellController';
  }
}

export const MpptShell = {
  template: require('./shell.html'),
  controller: ShellController
};

