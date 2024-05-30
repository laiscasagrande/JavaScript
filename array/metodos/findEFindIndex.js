//o find serve para eu encontrar um item desse array
const parr = array.find(item => item % 2 === 0)//quero encontrar um item par dentro desse array
document.body.innerText = JSON.stringify(par) //ele sempre encontra o primeiro item que satisfaça aquela considção
//Se não tiver nenhum número par, retorna indefined
const par = array.findIndex(item => item % 2 === 0) //ao invés de retornar o valor, retone o index
document.body.innerText = JSON.stringify(par)