import angular from 'angular';
import Page from './Page';
import PageTwo from './PageTwo';

export default angular
  .module('AppComponent', [
    Page,
    PageTwo
  ])
  .name;
