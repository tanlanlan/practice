export default function addMessageService($http, ApiService, $localStorage) {
  'ngInject';

  var messageList = [];
  var service = {
    save
  };
  return service;

  function save(message) {
    return $http({
      method: 'POST',
      url: ApiService.getUrl('/api/todos'),
      data: {
        content: message
      }});
  }

}
