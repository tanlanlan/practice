import angular from 'angular';
import AppConfig from './AppConfig';
import IonicConfig from './IonicConfig';
import TranslateConfig from './TranslateConfig';

export default angular.module('Config', [
  ])
  .config(AppConfig)
  .config(IonicConfig)
  .config(TranslateConfig)
  .name;
