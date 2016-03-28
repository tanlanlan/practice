export default function PageTwoService($http, ApiService) {
  'ngInject';

  var message = [];
  var service = {
    findAll,
    remove,
  };
  return service;



  function findAll() {
    return $http({
      method: 'GET',
      url: ApiService.getUrl('/api/todos')
    });
  }

  function remove(id) {
    // console.log('id:' + id);
    return $http({
      method: 'DELETE',
      url: ApiService.getUrl('/api/todos/' + id)
    });
  }





}
