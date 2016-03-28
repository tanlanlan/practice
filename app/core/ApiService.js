  export default function ApiServiceProvider() {

    this.apiService = new ApiService();
    this.domain = this.apiService.domain;
    this.getUrl = this.apiService.getUrl;

    this.$get = [function() {
      return this.apiService;
    }];
  }

  function ApiService() {
    this.domain = domain;
    this.getUrl = getUrl;
    var self = this;


    function domain(_domain) {
      self.domain = _domain;
    }

    function getUrl(url) {
      return self.domain + url;
    }


  }
