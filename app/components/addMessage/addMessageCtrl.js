export default class PageTwoCtrl {
  constructor($scope, $state, addMessageService) {
    'ngInject';

    var vm = this;
    vm.content = {};
    vm.save = save;
    vm.clear = clear;
    $scope.$on('$ionicView.afterEnter', activate);


    function activate() {
      if (vm.activated)
        return;

      vm.activated = true;

    }


    function save() {
      addMessageService.save(vm.message)
        .then(function() {
          $state.go('PageTwo');

        });
    };


    function clear() {
      //  console.log('dewfd'+vm.message);
      vm.message = '';
    }
  }
}
