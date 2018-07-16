angular
  .module('MyApp', ['ngMaterial', 'md.data.table', 'vAccordion', 'ngAnimate'])
  .controller('AppCtrl', function ($scope, $mdSidenav, $mdDialog) {
    $scope.areaEscolhida      = false;
    $scope.clienteEscolhido   = false;
    $scope.categoriaEscolhida = false;
    $scope.formaEscolhida     = false;
    $scope.remessa            = false;

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
        
      };
    }

    $scope.verificaFormaCompra = function(element) {
      if(element.formaCompra != "") {
        if(element.formaCompra == "Pontual" || element.formaCompra == "Venda ordem") {

          $scope.remessa = false;
          $scope.pedAgru = true;     
        } else if(element.formaCompra == "Remessa de futura") {
          $scope.remessa = true;
          $scope.pedAgru = false;
        } else {
          $scope.pedAgru = false;
          $scope.remessa = false;

        }

        $scope.formaEscolhida = true;
      }
    }
    $scope.abrePedidosAgrupados = function() {
      $scope.dialogPedidosAgrupados();
    }

    $scope.verificaClienteEscolhido = function (ev) {
      if($scope.clienteEscolhido) {
      };
      $scope.dialogCart(ev);
    }

    $scope.dialogClientes = function(ev) {
      $mdDialog.show({
        contentElement: '#clients',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      });
    }

    $scope.dialogPedidosAgrupados = function(ev) {
      $mdDialog.show({
        contentElement: '#pedidosAgrupadosDialog',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      });
    }

    $scope.abreRemessas = function(ev) {
      $mdDialog.show({
        contentElement: '#remessasDialog',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      });
    }

    $scope.dialogCart = function(ev) {
      $mdDialog.show({
        contentElement: '#cart',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      });
    }

    $scope.escolheCliente = function(cliente) {
      $mdDialog.hide();
      $scope.clienteEscolhido = true;
      $scope.cliente          = cliente;
    }

    $scope.verificaFamilia = function(familia) {
      $scope.familiaEscolhida = true;
      
    }

    $scope.verificaArea = function(area) {
      $scope.areaEscolhida  = true;
      $scope.areasComercial = area.nome;
    };

    $scope.verificaCategoria = function() {
      $scope.categoriaEscolhida = true;
    };
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
      {Id:"1", Razao:"Gabriel", 'CNPJ/CPF': 0213103012, 'Cidade/UF': 'Piraporâ/RS', codigo:"12312", tabela:"Contribuinte - bronze"},
      {Id:"2", Razao:"Manera", 'CNPJ/CPF': 0213103012, 'Cidade/UF': 'Enchentes/RS', codigo:"2131265", tabela:"Contribuinte - prata"},
      {Id:"3", Razao:"Gustavo", 'CNPJ/CPF': 0213103012, 'Cidade/UF': 'Arroio dos ratos/RS', codigo:"1221", tabela:"Contribuinte - ouro"},
      {Id:"4", Razao:"Felipe", 'CNPJ/CPF': 0213103012, 'Cidade/UF': 'Porto Alegre/RS', codigo:"83367", tabela:"Contribuinte - bronze"},
      {Id:"5", Razao:"Ana", 'CNPJ/CPF': 0213103012, 'Cidade/UF': 'Itaquacetuba/SP', codigo:"7346", tabela: "Tabela AC-MS-PA-RR"},
      {Id:"6", Razao:"Wander", 'CNPJ/CPF': 0213103012, 'Cidade/UF': 'Belo Horizonte/MG', codigo:"232352", tabela: "Tabela CE-PB-PE-SE-SP-TO"},
      {Id:"7", Razao:"Luis", 'CNPJ/CPF': 0213103012, 'Cidade/UF': 'Vitoria/ES', codigo:"34521", tabela: "Tabela MG-PR"}
      
    ]
   
    $scope.produtosCarrinho = [ {"Optima38": [{Graue: "+0300", Grauc: "", Eixo: "", Adicao:"+12", Curva:"8.7", Cor:"", Diametro:"", Olho:"", Quantidade:"1", 
        Unitário:"120.00", Desconto:"0.00", Final:"120.00", Total:"120.00"}
      ]
    }, 

    {"Toric Vision":[

      {Graue: "", Grauc: "+14.00", Eixo: "+12", Adicao:"", Curva:"8.7", Cor:"Roxo", Diametro:"", Olho:"OE", Quantidade:"2", 
      Unitário:"95.00", Desconto:"0.00", Final:"190.00", Total:"190.00"},{Graue: "+2.00", Grauc: "+14.00", Eixo: "+12", Adicao:"", Curva:"8.7", Cor:"", Diametro:"", Olho:"OE", Quantidade:"2", 
      Unitário:"95.00", Desconto:"0.00", Final:"190.00", Total:"190.00"}
      ]
    }
    ]
  })
  .config((['$mdThemingProvider', AppConfig ]));

  function AppConfig($mdThemingProvider) {


      // Color Pallete
      $mdThemingProvider.definePalette('ecommerceappTheme', {
          '50': 'E0F2F1',
          '100': 'B2DFDB',
          '200': '80CBC4',
          '300': '4DB6AC',
          '400': '26A69A',
          '500': '009688',
          '600': '00897B',
          '700': '00796B',
          '800': '00695C',
          '900': '004D40',
          'A100': 'A7FFEB',
          'A200': '64FFDA',
          'A400': '1DE9B6',
          'A700': '00BFA5',
          'contrastDefaultColor': 'light'
      });

      $mdThemingProvider.theme('default')
          .primaryPalette('ecommerceappTheme');
  }
  