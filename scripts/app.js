angular
  .module('MyApp', ['ngMaterial'])
  .controller('AppCtrl', function ($scope, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
        let botaoSide = document.getElementsByClassName(".sidenav-button");
        
      };
    }

  });

  