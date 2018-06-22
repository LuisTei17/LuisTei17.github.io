$("#lentes").click(function() {
    let lista = `
                    <ul class="lista_categoria">
                        <li><a class="main-link" href="index.html">Compras</a></li>
                        <li><a class="main-link" href="index.html">Trocas</a></li>
                        <li><a class="main-link" href="index.html">Bonificacao</a></li>                            
                    </ul>
                `;
    $('.content-list').fadeOut("slow", function() {
        $('.content-list').html(lista);
        $('.content-list').fadeIn("slow", function() {});
    });
    
      
})

