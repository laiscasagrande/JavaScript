//Optional Chaining

const user = {
  name: 'Diego',
  idade: 27,
  address: {
    street: 'Rua teste',
    number: 176,
    zip: {
      code: '456',
      city: 'Rio do Sul'
    },
     showFullAddress (){ //posso ter uma função dentro de um objeto
   return 'ók'
     }
  },
  }
  
  document.body.innerText = user.address ? user.address.street : 'Não informado'//se user.address existir eu mostro user.address.street, senao eu mostro uma mensagem
  
  document.body.innerText = user.address?.zip?.code ?? "Não informado" //o address pode não existir e o zip também pode não existir
  //eu vou tentar acessar o address do user, porém, se ele não existir, eu não vou tentar acessar o restante 
  document.body.innerText = user.address?.showFullAddress?.() //só vi chamar essa função caso ela exista
  const keyy = 'name' //vai determinar qual a propriedade que eu quero buscar do meu usuário
  document.body.innerText = user[key] //posso acessar propriedades através de colchetes
   
  const key = 'state';
  
  document.body.innerText = user.address[key]