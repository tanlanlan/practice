export default function AppConfig($urlRouterProvider, $mdGestureProvider,DOMAIN,ApiServiceProvider) {
  'ngInject';

  // 当 url 不匹配任何state 时就会进入这个方法
  $urlRouterProvider.otherwise(function($injector, $location) {
    var $state = $injector.get('$state');
    // var Session = $injector.get('Session');
  //  if (Session.isAuthenticated()){
  // $state.go('pageTwo');

 //} else{
    $state.go('Page');
  //}
  });

  $mdGestureProvider.skipClickHijack();

  // AppServiseProvider.id('ll');
  ApiServiceProvider.domain(DOMAIN);

}
