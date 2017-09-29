import angular from 'angular';
import 'angular-material';
import 'angular-material/angular-material.css';

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/components/header/header';
import {footer} from './app/footer';
import {MpptShell} from './app/components/shell/shell';

import './index.scss';

angular
  .module('app', [techsModule, 'ng', 'ngMaterial', 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainFooter', footer)
  .component('mpptShell', MpptShell);
