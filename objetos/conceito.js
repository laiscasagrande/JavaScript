//Objetos
//Estruturas de dados onde conseguimos arnazenar estruturas de chaves e valores
const user = {
name: 'Diego',
idade: 27,
address: {
  street: 'Rua teste',
  number: 176,
},
}

document.body.innerText = ('name' in user) //podemos verificar se existe uma informação dentro de um objeto

document.body.innerText = Object.keys(user) //retornar um vetor com todas as chaves do nosso objeto, nesse caso, irá retornar name, idade e address

document.body.innerText = Object.values(user) //retornar todos os valores do objetoao invés da chave. Nesse cso, ele mostrará Diego, 27 e [object Object]. Este último é porque ele não entende como ele printa esse valor em tela. Tem que colocar JSON.stringfy

document.body.innerText = JSON.stringify(Object.values(user)) //vai exibir Diego, 27, "street": "Rua Teste", "number": 176

document.body.innerText = JSON.stringify(Object.entries(user)) //retona um vetor com vários vetores dentro
