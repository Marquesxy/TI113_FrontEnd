let pessoa = {};
pessoa.nome = prompt("Informe seu nome");
pessoa.altura = parseFloat(prompt("Informe a Altura"));
pessoa.idd = parseInt(prompt("informe a sua idade"));
pessoa.dataNasc = prompt("Informa a sua data de nascimento (dd/mm/aaaa)");

console.log(pessoa);
alert
    (`o nome digitade é ${pessoa.nome},
a altura é ${pessoa.altura.toFixed(2)},
a idade é ${pessoa.idd} e 
voce nasceu em ${pessoa.dataNasc} `
);