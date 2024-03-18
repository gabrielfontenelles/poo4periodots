"use strict";
console.log("Calculo de Média");
const nota1 = 7.5;
const nota2 = 6.5;
window.addEventListener("load", ximbinha);
function ximbinha(e) {
    var elemento = document.getElementById("valor");
    let media = (nota1 + nota2) / 2;
    if (elemento) {
        elemento.innerHTML = `A média é essa aí: ${media}`;
    }
}
