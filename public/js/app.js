angular
  .module("whenPresident", [
    "ui.router",
    "ngResource"
  ])
  config([
    "$stateProvider",
    Router
  ])

  function Router ($stateProvider) {
    $stateProvider
    .state('Welcome to Book-It!', {
      url: '/',
      tempplateURL: ''
    })
  }
