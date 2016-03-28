import angular from 'angular';
import RegisterRoute from './RegisterRoute';
import RegisterService from './RegisterService';

export default angular.module('RegisterComponent', [])
  .factory('RegisterService', RegisterService)
  .config(RegisterRoute)
  .name;
