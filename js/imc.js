let botao = document.querySelector("#btnMostrar");
botao.addEventListener("click", IMCC);

function IMCC(){
    let imc = {};

    imc.nome = document.querySelector('#txtNome').value;

    imc.altura = parseFloat(document.querySelector('#txtAltura').value);

    imc.peso = parseInt(document.querySelector('#txtPeso').value);

    let calculo = imc.peso / (imc.altura * imc.altura)

    let msg = `
    O IMC de <strong>${imc.nome}</strong> é de <strong>${calculo.toFixed(2)}.</strong>`

    let div = document.querySelector('#resultado');
    div.innerHTML = msg
}