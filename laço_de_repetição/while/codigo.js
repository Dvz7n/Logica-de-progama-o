
let tentativas = 0
const usuario = prompt("Criar um usuario: ")
const senha = prompt("Criar uma senha: ")

let confirmarUsuario = prompt("\n Confirmar seu usu�rio: ")
let confirmeSenha = prompt("Confirmar a sua senha: ")

//pedido de usuario e senha validas
while (confirmarUsuario !== usuario || confirmeSenha !== senha){
    console.log("usuario ou senha errados.")
    let confirmarUsuario = prompt("Confirmar seu usu�rio: ")
    let confrmeSenha = prompt("Confirmar a sua senha: ")
}
console.log("Para realizar seu login, confirme sua senha")

// confirme sua senha
confirmeSenha = prompt("\nConfirme sua senha: ")
while((confirmeSenha !== senha)  && tentativas < 3){
    console.log("Senha incorreta, colque o novamente.")
    confirmeSenha = prompt("Confirme sua senha: ")
    tentativas ++
    console.log("Acesso Negado")

    let recuprarSenha = prompt("\nEsqueceu sua senha? (Sim/N�o): ").toLowerCase()
    if (recuperarSenha = "sim"){
        console.log("Sua senha � ",senha)
        confirmeSenha = prompt("Confirme sua senha: ")
    }
    
    else if (recuperarSenha == "nao" || recuperarSenha == "n�o"){
        confirmeSenha = prompt("Confirme sua senha: ")
    }
}

console.log("Login Efetuado!")

let sair = prompt("Deseja sair do seu login? (se sim, digite 'sair'): ")
if (sair = "sair"){
  console.log("Vo�� saiu da sua conta.")
}