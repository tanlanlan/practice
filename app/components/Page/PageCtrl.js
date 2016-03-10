export default class PageCtrl {
  constructor(PageService, $state, $scope) {
    'ngInject';

    var vm = this;
    vm.message = 'Hello World';
    vm.goPageTwo = goPageTwo;

    $scope.$on('$ionicView.afterEnter', activate);

    function activate() {
      if (vm.activated)
        return;

      PageService.test();
      vm.activated = true;
    }

    function goPageTwo() {
      $state.go('PageTwo');
    }
  }
}
