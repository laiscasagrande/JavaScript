const array = [1, 3, 8, 5]
//serve para quando eu quero pegar esse array e criar uma nova estrutura de base de acrodo com esse array, quero criar algo novo
//quero reduzir meu array a algo, que pode ser um objeto, pode ser um outro array
const soma = array.reduce((acc, item) => { //assim como os outros métodos, o reduce também receb uma função(arrow function)
document.body.innerText += acc + ',' + item + '***'
return acc + itemtenho //que retornar a cada novo valor da ireração
}, 0)//o reduce também recebe um segundo parâmetro, que o valor inicial dessa nova estrutura
//Nesse caso, que fazer uma soma, por isso o meu valor inicial vai ser 0. Se fosse um objeto, eu iniciaria com um {} vazio
//o acc é o objeto que estou criando e o item é cada informação do array