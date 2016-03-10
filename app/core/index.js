import angular from 'angular';
import LocaleUtils from './LocaleUtils';

export default angular.module('AppCore', [])
  .constant('LocaleUtils', LocaleUtils)
  .name;
