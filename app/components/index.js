import angular from 'angular';
import Page from './Page';
import PageTwo from './PageTwo';
import RegisterComponent from './register';
import addMessageComponent from './addMessage';


export default angular
  .module('AppComponent', [
    Page,
    PageTwo,
    RegisterComponent,
    addMessageComponent,
  
  ])
  .name;
