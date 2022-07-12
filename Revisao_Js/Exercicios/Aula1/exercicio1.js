/* EXERCICIO 1 - Manipulação de array */
const nomes = ["Gabriela", "Junior", "Luciana", "Caroline", "Lucas"];

// adicione um nome ao final da lista de nome

nomes.push("Danielys")

// exiba a lista modificada
console.log("adição ao final:\n", nomes);

// retire esse nome do fim da lista

nomes.pop()

// exiba a lista modificada
console.log("retirada do final:\n", nomes);

// adicione um nome no início da lista

nomes.unshift('Danielys')

// exiba a lista modificada
console.log("inserção ao início:\n", nomes);

// retire esse nome do início da lista

nomes.shift()

// exiba a lista modificada
console.log("retirada do início:\n", nomes);

// exiba o indice do nome 'Luciana'

console.log(nomes.indexOf('Luciana'))
