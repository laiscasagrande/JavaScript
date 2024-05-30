//Existem coisas na programação que demoram para nos retornar informações. Não podemos deixar nossa aplicação esperando até essa informação chegar
//Precisamos que algumas coisas na nossa aplicação sejam assíncronas
//Promessas de que algo vai acontecer ou dar errado

// const somaDoisNumeros = (a, b) => {
//    return new Promise((resolve, reject) => { //o resolve é uma função que eu chamo para indicar que deu tudo certo. E o reject é uma função que eu chmao para falar que deu ruim
// setTimeout(() => { //Estou devolvando uma promessa de que vai dar certo ou não. Essa promessa demora 2 segundos para acontecer e devolve a soma dos números
// resolve(a + b)
// },2000)
//    }
// )}
// //a promisse sempre vi contar com o then, que indica que tudo deu certo, e o catch, quando alguma coisa não deu certo
// somaDoisNumeros(1, 3)
// .then(soma => {
//    document.body.innerText = soma
// })
// .catch (err => {
//    console.log(err)
// })

//fetch('https://api.github.com/users/diego3g')//api do navegador que serve para eu disparar uma requisição HTTP 
//Estou fazendo uma requisição para o servidor do github
// .then(response => {
//    response.json().then(body => {
//       console.log(body);
//    })
//})
// .then(response => { //pegar minha resposta e retornar daqui de dentro 
// return response.json() //retonar minha response em JSON
// })
// .then(body => {
//    console.log(body) //agora vou retornar o body
// })
// .catch(err => {
//    console.log(err)
// })
// .finally(() => { //é um método que vai ser executado independente se deu certo ou errado
// console.log('deu')
// })
//  async function buscaDadosNoGithub() { //é uma função que tem algum código dentro dela que demora pra executar, que é uma promisse
// try{
//    const response = await fetch('https://api.github.com/users/diego3g')//await significa que eu quero aguardar alguma executar. Ou seja, a próxima linha de código só vai executar quando essa linha terminar
//    const body = await response.json();
//    console.log(body)
// }catch (err) {
//    console.log(err)
// }finally{
//    console.log('deu')
// }
// }
// buscaDadosNoGithub()

//Quando eu uso uma async, automaticamente ela vira uma promisse
async function buscaDadosNoGithub() { //é uma função que tem algum código dentro dela que demora pra executar, que é uma promisse
  try{
     const response = await fetch('https://api.github.com/users/diego3g')//await significa que eu quero aguardar alguma executar. Ou seja, a próxima linha de código só vai executar quando essa linha terminar
     const body = await response.json();
     return body.name
  }catch (err) {
     console.log(err)
  }finally{
     console.log('deu')
  }
  }
  // const name = buscaDadosNoGithub()
  // console.log(name) //vai aparecer no console Promise porque toda função assíncrona vira uma promisse automaticamente. Sendo assim, para não retornar Promisse, tenho que fazer assim:

  const name = buscaDadosNoGithub().then(name => {
     console.log(name)
  })