//short syntax

const name = 'Diego'; //posso atribuir valores a uma variável e usá-las dentro de um objeto
const age = 27

const user = {
  name,
  age
}
document.body.innerText = JSON.stringify(user)