export default class RegisterCtrl {
  constructor(RegisterService, $scope, PageTwoService,$state) {
    'ngInject';

    var vm = this;
    vm.message = 'I\'m in Register';
    vm.user = {};
    vm.register = register;
    vm.goPage = goPage;

    function goPage() {
      $state.go('Page');
    }

    function register() {
      console.log(vm.user);
      RegisterService.register(vm.user)
        .then(function(response) {
          vm.massage = 'congratulation!Register successfully';
          goPage();
        })
        .catch(function() {
          vm.massage = 'sorry,Fail to register';

        });

    }
    $scope.$on('$ionicView.afterEnter', activate);

    function activate() {
      if (vm.activated)
        return;
      // RegisterService.register();
      vm.activated = true;
    }
  }

}
