export default class PageTwoCtrl {
  constructor(PageTwoService, $scope, $state, $ionicListDelegate) {
    'ngInject';

    var vm = this;
    vm.addMessage = addMessage;
    vm.content = {};
    vm.findAll = findAll;
    vm.deleteMessage = deleteMessage;
    vm.goEdit = goEdit;
    $scope.$on('$ionicView.afterEnter', activate);


    function activate() {

      findAll();

      vm.activated = true;
    }


    function addMessage() {
      //  console.log('gotoMesssage');
      $state.go('addMessage');

    }


    function findAll() {
      PageTwoService.findAll()
        .then(function(response) {
          //  console.log(response);
          vm.message = response.data;

        });
    }

    function deleteMessage(message) {
      //console.log(todo);
      PageTwoService.remove(message.id)
        .then(function() {
          $ionicListDelegate.closeOptionButtons();
        });
    }

    function goEdit(){
      $state.go('Edit');
    }




  }


}
