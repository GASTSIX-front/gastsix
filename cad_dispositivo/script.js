let menu = document.getElementById("menu_lateral");
let menu_barras = document.getElementById("menu_barras");

// CADASTRO

let menu_cadastros = document.getElementById("menu_lateral_cadastro");
let menu_cadastro_aberto = document.getElementById("menu_cadastro_aberto");

// ESTOQUE

let menu_estoque = document.getElementById("menu_lateral_estoque");
let menu_estoque_aberto = document.getElementById("menu_estoque_aberto");

// PEDIDO

let menu_pedidos = document.getElementById("menu_lateral_pedidos");
let menu_pedidos_aberto = document.getElementById("menu_pedidos_aberto");

// RELATORIOS

let menu_relatorios = document.getElementById("menu_lateral_relatorios");
let menu_relatorios_aberto = document.getElementById("menu_relatorios_aberto");






function mostrarMenu (){
    if (window.getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
        menu_barras.setAttribute("aria-label","fechar menu")
        menu_barras.setAttribute("aria-expandede","true")
    }else{
       menu.style.display = "none"
       menu_barras.setAttribute("aria-label","abrir menu")
       menu_barras.setAttribute("aria-expandede","false")
    }
}

// CADASTRO

function mostrar_menu_cadastro (){
    if (window.getComputedStyle(menu_cadastros).display == "none") {
        menu_cadastros.style.display = "flex"
        menu_estoque.style.display = "none"
        menu_pedidos.style.display = "none"
        menu_relatorios.style.display = "none"
        menu_cadastro_aberto.setAttribute("aria-label","fechar menu")
        menu_cadastro_aberto.setAttribute("aria-expandede","true")
    
    }else{
        menu_cadastros.style.display = "none"
       menu_cadastro_aberto.setAttribute("aria-label","abrir menu")
       menu_cadastro_aberto.setAttribute("aria-expandede","false")
       

    }
}

// ESTOQUE
function mostrar_menu_estoque (){
    if (window.getComputedStyle(menu_estoque).display == "none"){
        menu_cadastros.style.display = "none"
        menu_estoque.style.display = "flex"
        menu_pedidos.style.display = "none"
        menu_relatorios.style.display = "none"
        menu_estoque_aberto.setAttribute("aria-label","fechar menu")
        menu_estoque_aberto.setAttribute("aria-expandede","true")
    }else{
        menu_estoque.style.display = "none"
       menu_estoque_aberto.setAttribute("aria-label","abrir menu")
       menu_estoque_aberto.setAttribute("aria-expandede","false")

  
    }
}

// PEDIDOS

function mostrar_menu_pedidos(){
    if (window.getComputedStyle(menu_pedidos).display == "none") {
        menu_cadastros.style.display = "none"
        menu_estoque.style.display = "none"
        menu_pedidos.style.display = "flex"
        menu_relatorios.style.display = "none"
        menu_pedidos_aberto.setAttribute("aria-label","fechar menu")
        menu_pedidos_aberto.setAttribute("aria-expandede","true")
    }else{
        menu_pedidos.style.display = "none"
        menu_pedidos_aberto.setAttribute("aria-label","abrir menu")
        menu_pedidos_aberto.setAttribute("aria-expandede","false")
    }
}

// RELATORIOS

function mostrar_menu_relatorios(){
    if (window.getComputedStyle(menu_relatorios).display == "none") {
        menu_cadastros.style.display = "none"
        menu_estoque.style.display = "none"
        menu_pedidos.style.display = "none"
        menu_relatorios.style.display = "flex"
        menu_relatorios_aberto.setAttribute("aria-label","fechar menu")
        menu_relatorios_aberto.setAttribute("aria-expandede","true")
    }else{
        menu_relatorios.style.display = "none"
        menu_relatorios_aberto.setAttribute("aria-label","abrir menu")
        menu_relatorios_aberto.setAttribute("aria-expandede","false")
    }
}





