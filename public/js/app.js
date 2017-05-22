angular
  .module("questions", [
    "ui.router",
    "ngResource"
  ])
  config([
    "$stateProvider",
    Router
  ])

  function Router ($stateProvider) {
    $stateProvider
    .state('welcome', {
      url: '/',
      templateURL: '/public/js/ng-views/welcome.html'
    })
  }
