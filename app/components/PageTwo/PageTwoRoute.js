import pageTwoTemplate from './PageTwo.html';
import PageTwoCtrl from './PageTwoCtrl';

export default function PageTwoRoute($stateProvider) {
  'ngInject';

  $stateProvider
    .state('PageTwo', {
      url: '/pageTwo',
      templateUrl: pageTwoTemplate,
      controller: PageTwoCtrl,
      controllerAs: 'vm'
    });
}
