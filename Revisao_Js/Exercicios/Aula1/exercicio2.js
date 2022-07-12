/* EXERCICIO 2 - Array Filter */

/*
o array abaixo armazena clientes, seus nomes e situação para
solicitação de emprestimo estão representados nas propriedades
*/
const clientes = [
  {
    nome: "Felipe",
    apto: true,
  },
  {
    nome: "Eliane",
    apto: false,
  },
  {
    nome: "Jane",
    apto: false,
  },
  {
    nome: "Luiz",
    apto: true,
  },
];

// Filtre apenas os clientes aptos para solicitar emprestimo

const clientesAptos = clientes.filter(cliente => {return cliente.apto === true})
console.log(clientesAptos);

/*
Para aqueles não aptos, adicione uma propriedade verificacao
para o time de dados verificar o por quê desses clientes não
estarem aptos para solicitar emprestimo
*/

clientes.map(cliente => {cliente.apto === false? cliente['verificacao'] = true : cliente})

console.log(clientes)

// ex.: { nome: 'Eliane', apto: false, verificacao: true }
