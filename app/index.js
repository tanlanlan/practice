import angular from 'angular';
import vendor from './Vendor';
import config from './config';
import core from './core';
import filters from './filters';
import components from './components';
import AppRun from './run/AppRun';
import './scss/ionic.app.scss';

export default angular.module('app', [
    vendor,
    core,
    filters,
    config,
    components
  ])
  .run(AppRun)
  .name;
