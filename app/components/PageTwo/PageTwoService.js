export default function PageTwoService() {
  'ngInject';

  var service = {
    test
  };
  return service;

  function test() {
    console.log('calling PageTwoService.test()');
  }
}
