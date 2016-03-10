import angular from 'angular';
import PageRoute from './PageRoute';
import PageService from './PageService';

export default angular.module('PageComponent', [])
  .factory('PageService', PageService)
  .config(PageRoute)
  .name;
