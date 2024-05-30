//Desestruturação
//Conseguir remover parte do objeto para uma variável a 
//Quero obter as informações do endereço dentro de uma variável

//const address = user.address
document.body.innerText = JSON.stringify(address) //essa é a forma de fazer sem desestruturaçao

const {address, idade} = user //isso e desestruturacao
document.body.innerText = JSON.stringify({address, idade})

//A desestruturacao pode ser usada dentro de funcoes

function mostraIdade(user){ //a funcao recebe o objeto user
  return user.idade //vai retornar a idade do usuario
}
document.body.innerText = mostraIdade(user)

function mostraIdade({idade}){ //outra forma de fazer
  return idade //vai retornar a idade do usuario
}
document.body.innerText = mostraIdade(user)