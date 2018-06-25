$("#lentes").click(function() {
    let lista = `
                    <ul class="lista_categoria">
                        <li><a class="main-link" href="example_lentes.html">Compras</a></li>
                        <li><a class="main-link" href="">Trocas</a></li>
                        <li><a class="main-link" href="">Bonificacao</a></li>                            
                    </ul>
                `;
    $('.content-list').fadeOut("slow", function() {
        $('.content-list').html(lista);
        $('.content-list').fadeIn("slow", function() {});
    });
    
      
})

