import pageTemplate from './Page.html';
import PageCtrl from './PageCtrl';

export default function PageRoute($stateProvider) {
  'ngInject';

  $stateProvider
    .state('Page', {
      url: '/page',
      templateUrl: pageTemplate,
      controller: PageCtrl,
      controllerAs: 'vm'
    });
}
