angular
  .module('MyApp', ['ngMaterial'])
  .controller('AppCtrl', function ($scope, $mdSidenav, $mdDialog) {
    $scope.areaEscolhida      = false;
    $scope.categoriaEscolhida = false;
    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
        let botaoSide = document.getElementsByClassName(".sidenav-button");
        
      };
    }

    
    $scope.verificaArea = function(area) {

      $scope.areaEscolhida  = true;
      $scope.areasComercial = area.nome;
    };

    $scope.verificaCategoria = function() {
      $scope.categoriaEscolhida = true;
    };
    $scope.toggleLeft = buildToggler('left');
    $scope.categoria = {nome:"Escolha uma categoria"};
    $scope.categorias = [
      {nome:"Compras"},
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

    $scope.clientes = [
      {nome:"Gabriel", codigo:"12312", id:"1"},
      {nome:"Manera", codigo:"2131265", id:"2"},
      {nome:"Gustavo", codigo:"1221", id:"3"},
      {nome:"Felipe", codigo:"83367", id:"4"},
      {nome:"Ana", codigo:"7346", id:"5"},
      {nome:"Wander", codigo:"232352", id:"6"},
      {nome:"Luis", codigo:"34521", id:"7"}
      
    ]
   






   
   

  });

  