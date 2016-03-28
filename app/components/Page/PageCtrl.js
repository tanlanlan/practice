export default class PageCtrl {
  constructor(PageService, $state, $scope, $localStorage) {
    'ngInject';

    var vm = this;
    vm.goRegister = goRegister;
    vm.signIn = signIn;
    vm.goPageTwo = goPageTwo;

  $scope.$on('$ionicView.afterEnter', activate);

    function activate() {
      if (vm.activated)
        return;
      vm.activated = true;
    }


    function goRegister() {
      $state.go('Register');
    }

    function goPageTwo() {
      $state.go('PageTwo');
    }

    function signIn() {
      var user = {
        username: vm.username,
        password: vm.password
      };
      PageService.login(user)
        .then(function(response) {
          console.log(JSON.stringify(response));
          vm.user = {};
          goPageTwo();
          // $localStorage.token = response.data.access_token;
        })
        .catch(function() {
          alert('登陆失败');
        });

    }


  }
}
