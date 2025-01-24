let botao = document.querySelector("#btnMostrar");
botao.addEventListener("click", mostrarValores);

function mostrarValores() {
    let pessoa = {};
    pessoa.nome = document.querySelector('#txtNome').value;

    pessoa.altura = parseFloat(document.querySelector('#txtAltura').value);

    pessoa.idd = parseInt(document.querySelector('#txtIdade').value);

    pessoa.dataNasc = document.querySelector('#txtDataNasc').value;

    let msg = `
    <br><br>
    o nome digitade é <strong>${pessoa.nome}</strong><br>
    a altura é <strong>${pessoa.altura.toFixed(2)}</strong><br>
    a altura é <strong>${pessoa.altura.toFixed(2)}</strong><br>
    a idade é <strong>${pessoa.idd}</strong><br>
    voce nasceu em <strong>${pessoa.dataNasc}</strong>`;

    let div = document.querySelector('#resultado');
    div.innerHTML = msg
}

// let pessoa = {};
// pessoa.nome = prompt("Informe seu nome");
// pessoa.altura = parseFloat(prompt("Informe a Altura"));
// pessoa.idd = parseInt(prompt("informe a sua idade"));
// pessoa.dataNasc = prompt("Informa a sua data de nascimento (dd/mm/aaaa)");

// console.log(pessoa);
// alert
//     (`o nome digitade é ${pessoa.nome},
// a altura é ${pessoa.altura.toFixed(2)},
// a idade é ${pessoa.idd} e
// voce nasceu em ${pessoa.dataNasc} `
// );