angular
  .module('MyApp', ['ngMaterial'])
  .controller('AppCtrl', function ($scope, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.categoria = {nome:"Escolha uma categoria"};
    $scope.categorias = [
      {nome:"trocas"},
      {nome:"bonificacao"},
      {nome:"compras"}

    ];

   
    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
        let botaoSide = document.getElementsByClassName(".sidenav-button");
        
      };
    }

  });

  