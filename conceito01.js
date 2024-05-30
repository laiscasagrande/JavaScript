//Nullish Coaleing Operator. Lidar com valores nulos
const idade = null
document.body.innerText('Sua idade é ' + idade)

//Quando quero lidar com valores nulos dentro do jvascript, ou qual o valor default de uma variável que nao foi setada
//Tenho duas formas de fazer isso: 

document.body.innerText('Sua idade é ' + (idade || "Nao informado")) //O operador ou verifica se a primeira instruçao é um valor valido, senao, ele mostra o valor que está a direita

//0, '',[], false, undefined, null => falsy, ou seja, valores não válidos quando trazemos par um operador ||

document.body.innerText('Sua idade é ' + (idade ?? "Nao informado")) //faz a mesma coisa que o operador ||, porém é mais restritivo, ou seja, vai olhar somente para null ou undefined, que nao possuem valores significativos. 0 é um valor real

