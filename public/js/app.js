angular
  .module("questions", [
    "ui.router",
    "ngResource"
  ])
  config([
    "$stateProvider",
    Router
  ])
  .factory('Book', [
    '$resource',
      Book
  ])
  .controller('indexCtrl', [
    "Book",
    indexController

  ])
  function Router ($stateProvider) {
    $stateProvider
    .state('welcome', {
      url: '/',
      templateURL: '/public/js/ng-views/welcome.html',
      controller: 'indexCtrl',
      controllerAs:'vm'
    })
  }
  .state('index', {
    url:'/questions',
    templateURL:'/public/js/ng-views/index.html'
  })
}

   function Q ($resource) {
    return $resource("/api/candidates/:name", {}, {
      update: { method: "PUT" }
    });
   }

    function indexController (Candidate) {
      this.candidates = Candidate.query()
    }
