// Função que valida Login e Senha do usuário
function validarLogin() {
    //recebe os valores digitados pelo usuário
    let usuario = document.getElementById("user").value;
    let senha = document.getElementById("password").value;
    //verifica se o usuário e a senha estão corretos
    if ( usuario == "admin" && senha == "") {
        alert("Login realizado com sucesso!");
        window.location = "./log_home/index.html"
    } else {
        alert("Usuário ou Senha incorreta!")
    }
}