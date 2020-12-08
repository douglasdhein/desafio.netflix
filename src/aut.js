
import { Usuarios } from "./users";

export class Autenticacao {
    constructor() {

    }


entrar(inputUsuario, inputSenha) {
    //usar o find
    if (inputUsuario === Usuarios.usuario && inputSenha === Usuarios.senha) {
        localStorage.setItem("Login", JSON.stringify(inputUsuario));
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("indexPage").style.display = "block";
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

sair() { 
    localStorage.clear();
    localStorage.setItem('logout-option', JSON.stringify(logoutButton));
    document.getElementById("indexPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}

}