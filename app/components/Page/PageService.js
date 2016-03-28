export default function PageService($http, ApiService, ClientSecret, $httpParamSerializerJQLike, $localStorage) {
  'ngInject';

  var service = {
    login
  };
  return service;


  function login(user) {
    //  console.log('user:'+user);
    return $http.post(ApiService.getUrl('/oauth/token'), $httpParamSerializerJQLike({
      grant_type: 'password',
      username: user.username,
      password: user.password
    }), {
      headers: {
        'Authorization': ClientSecret,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function(response) {
      $http.defaults.headers.common.Authorization = 'Bearer '+response.data.access_token;
      $localStorage.user = {
        access_token: response.data.access_token,
        username: user.username,
        isAuthenticated: true
      };
    });


  }

}
