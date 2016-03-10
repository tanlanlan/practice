export default function PageService() {
  'ngInject';

  var service = {
    test
  };
  return service;

  function test() {
    console.log('calling PageService.test()');
  }
}
