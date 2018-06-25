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

    $scope.formas = [
      {nome:"Pontual"},
      {nome:"Futura"},
      {nome:"Remessa de futura"},
      {nome:"Venda ordem"}

    ];

    $scope.tiposFaturamento = [
      {nome:"Total"},
      {nome:"Parcial"}

    ];


    $scope.condicoesPagamento = [

      {
        "SAP": [
          {nome: "2x3"},
          {nome: "0+23"},
          {nome: "2+3"}
          
        ]
      },
      {
        "Cartao": [
          {nome:"Cartao de credito 1x"},
          {nome:"Cartao de credito 2x"},
          {nome:"Cartao de credito 3x"}
          
        ]
      }
    ];


   
    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
        let botaoSide = document.getElementsByClassName(".sidenav-button");
        
      };
    }

  });

  