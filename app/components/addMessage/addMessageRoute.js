import addMessageTemplate from './addMessage.html';
import addMessageCtrl from './addMessageCtrl';

export default function addMessageRoute($stateProvider) {
  'ngInject';

  $stateProvider
    .state('addMessage', {
      url: '/addMessage',
      templateUrl: addMessageTemplate,
      controller: addMessageCtrl,
      controllerAs: 'vm'
    });
}
