import angular from 'angular';
import addMessageRoute from './addMessageRoute';
import addMessageService from './addMessageService';

export default angular.module('addMessageComponent', [])
  .factory('addMessageService', addMessageService)
  .config(addMessageRoute)
  .name;
