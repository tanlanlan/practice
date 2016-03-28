export default function RegisterService($http, ApiService) {
  'ngInject';

  var service = {
    register
  };
  return service;

  function register(user) {
    console.log(JSON.stringify(user));
    return $http({
      method: 'POST',
      url: ApiService.getUrl('/users'),
      data: user
    });
  }
}
