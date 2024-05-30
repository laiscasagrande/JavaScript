//diferente do map, ele nao faz nada com o array. Só filtra, pega um pedaço
const novoArray = array
.filter(item => item % 2 === 0) //estou filtrando apenas os números pares
.map(item => item * 2) //agora eu posso percorrer esses itens e multiplicá-los por 2
document.body.innerText = JSON.stringify(novoArray)