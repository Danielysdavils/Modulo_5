/* EXERCICIO 3 - Rest*/
/*
Nesse exercicio temos um numero desconhecido de nomes que será passado via argumentos, complete a função para que mostre cada nome individualmente no console
*/
function exibeNomes(...nomes) {
  nomes.forEach(nome => {console.log(nome)})
}

exibeNomes("Pedro", "Maria", "João");
exibeNomes("Marta", "Tiago");
