import angular from 'angular';
import PageTwoRoute from './PageTwoRoute';
import PageTwoService from './PageTwoService';

export default angular.module('PageTwoComponent', [])
  .factory('PageTwoService', PageTwoService)
  .config(PageTwoRoute)
  .name;
