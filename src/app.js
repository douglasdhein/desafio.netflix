import { Autenticacao } from "./aut";
import { sinopses } from './sinopse';
import { Card } from './mostrarSinopse';


class App {
    constructor() {
        this.inputUsuario = document.getElementById('usuario'); //Criar input
        this.inputSenha = document.getElementById('senha'); //criar input
        this.botaoEntrar = document.getElementById('botaoEntrar'); //criar botao
        this.logoutButton = document.getElementById('logoutButton');
        this.autenticacao = new Autenticacao();

        this.registrarLogin();
        this.registrarLogout();
        //this.listarFilmesDestaque(); 
        this.registrarClick();
    }

    /*
    listarFilmesDestaque() {
        const destaques = sinopses.filter(f => f.categoria === "Em alta");
        let htmlDestaque = "";
        destaques.forEach((f) => {
            htmlDestaque += card.mostraCapa();
        });

        document.getElementById("lugar_certo").innerHTML = htmlDestaque;
    }
    */

    registrarClick() {

        document.querySelectorAll(".click-filme").forEach((el) => {
            el.onclick = (event) => {

                //console.log(event.path);
                const clic = event.path[1];

                const sinopse = sinopses.find(f => f.id == clic.dataset.id);


                const card = new Card(sinopse);

                document.getElementById("aqui1").innerHTML = card.mostrarSinopse();
            }

        }

        );
    }


    /* excluir(event) {
        const filmeResumo = event.path[1];
        const filmeEditado = parseInt(filmeResumo.dataset.id);


        this.sinopse.excluir(filmeEditado);


    } */

    registrarLogin() {

        this.botaoEntrar.onclick = () => {
            this.autenticacao.entrar(this.inputUsuario.value, this.inputSenha.value);
        }


    };

    registrarLogout() {

        this.logoutButton.onclick = () => {
            this.autenticacao.sair();
        }


    };

    mostrarSinopse(id) {
        this.mostrarSinopse(id).onclick = () => {
            if (document.getElementById(id).style.display === "none") {
                document.getElementById(id).style.display = "block";
            } else {
                document.getElementById(id).style.display === "none"
            }
        }

    };

}


new App();