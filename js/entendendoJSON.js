const pessoas = [];

function CadastrarPessoa() {
    let pessoa = {};

    pessoa.nome = document.querySelector('#txtNome').value;
    pessoa.sobrenome = document.querySelector('#txtSobreNome').value;
    pessoa.cpf = document.querySelector('#txtCPF').value;
    pessoa.datanasc = document.querySelector('#txtDataNasc').value;

    // Após guardar os dados, os campos são apagados
    document.querySelector('#txtNome').value = "";
    document.querySelector('#txtSobreNome').value = "";
    document.querySelector('#txtCPF').value = "";
    document.querySelector('#txtDataNasc').value = "";

    pessoas.push(pessoa);

    gravarStorage();
    gravarTabela();
}

function gravarStorage() {
    let ListaPessoas = JSON.stringify(pessoas);
    localStorage.setItem("listaPessoas", ListaPessoas);
}

function gravarTabela() {
    let tabela = JSON.parse(localStorage.getItem("listaPessoas")) || [];
    let body = document.querySelector('#tabPessoas tbody');
    body.innerHTML = ""; // Limpa a tabela antes de atualizar

    tabela.forEach(item => {
        let linha = document.createElement('tr');

        let nomeCell = document.createElement('th');
        nomeCell.textContent = item.nome;
        linha.appendChild(nomeCell);

        let sobrenomeCell = document.createElement('th');
        sobrenomeCell.textContent = item.sobrenome;
        linha.appendChild(sobrenomeCell);

        let cpfCell = document.createElement('th');
        cpfCell.textContent = item.cpf;
        linha.appendChild(cpfCell);

        let dataNascCell = document.createElement('th');
        dataNascCell.textContent = item.datanasc;
        linha.appendChild(dataNascCell);

        body.appendChild(linha);
    });
}

function carregarDados() {
    const dados = localStorage.getItem("listaPessoas");
    if (dados) {
        pessoas.push(JSON.parse(dados));
        gravarTabela();
    }
}

document.addEventListener('DOMContentLoaded', carregarDados);

let btnCadastrar = document.querySelector('#btnCadastrar');
btnCadastrar.addEventListener('click', CadastrarPessoa);