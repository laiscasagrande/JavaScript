//Rest operator. Operador de resto

//const {name, ...rest} = user //o ...rest serve para pegar o resto das informações que sobraram a partir do name. 
document.body.innerText = JSON.stringify(rest) //Ele vai trazer odas as informações, menos o namr

//Posso fazer desestruturação com arrays também

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const [first, , third, ...rest] = array //o espaço é porque nao quero trazer o second
document.body.innerText = JSON.stringify({first, third, rest})