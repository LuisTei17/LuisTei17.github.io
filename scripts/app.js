angular
  .module('MyApp', ['ngMaterial'])
  .controller('AppCtrl', function ($scope, $mdSidenav) {
    $scope.areaEscolhida = false;
    $scope.categoriaEscolhida = false;
    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
        let botaoSide = document.getElementsByClassName(".sidenav-button");
        
      };
    }

    $scope.verificaArea = function() {
      console.log("aaa")
      $scope.areaEscolhida = true;
    };

    $scope.verificaCategoria = function() {
      $scope.categoriaEscolhida = true;
    };
    $scope.toggleLeft = buildToggler('left');
    $scope.categoria = {nome:"Escolha uma categoria"};
    $scope.categorias = [
      {nome:"compras"},
      {nome:"Amostras"},
      {nome:"Trocas"},
      {nome:"Devoluções"}

    ];

    $scope.formas = [
      {nome:"Pontual"},
      {nome:"Futura"},
      {nome:"Remessa de futura"},
      {nome:"Venda ordem"}

    ];

    $scope.areasComerciais = [
      {nome:"Lentes"},
      {nome:"Soluções"},
      {nome:"Cirúrgico"}

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


    $scope.familias = [
      {nome:"Optima Toric"},
      {nome:"HGP"},
      {nome:"Softlens Toric"}
    ]

    
    $scope.eixos = [
      {nome:"12"},
      {nome:"11"},
      {nome:"10"}
    ]



    $scope.graus = [
      {nome:"8"},
      {nome:"7"},
      {nome:"6"}
    ]

    
    






   
   

  });

  