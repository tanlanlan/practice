export default class PageTwoCtrl {
  constructor(PageTwoService, $scope) {
    'ngInject';

    var vm = this;
    vm.message = 'I\'m in Page Two';

    $scope.$on('$ionicView.afterEnter', activate);

    function activate() {
      if (vm.activated)
        return;

      PageTwoService.test();
      vm.activated = true;
    }
  }
}
