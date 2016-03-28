import angular from 'angular';
import AppConfig from './AppConfig';
import IonicConfig from './IonicConfig';
import TranslateConfig from './TranslateConfig';
import ConfigEnviroment from './ConfigEnvironment';

export default angular.module('Config', [
    ConfigEnviroment
  ])
  .config(AppConfig)
  .config(IonicConfig)
  .config(TranslateConfig)
  .name;
