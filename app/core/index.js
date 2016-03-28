import angular from 'angular';
import LocaleUtils from './LocaleUtils';
import ApiService from './ApiService';

export default angular.module('AppCore', [])
  .constant('LocaleUtils', LocaleUtils)
  .provider('ApiService', ApiService)
  .name;
