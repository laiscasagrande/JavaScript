array.map(item => { //a diferença entre o map e o forEach, é que, com o map, eu consigo fazer um retorno de dentro do map. Poe wxemplo, eu quero percorrer todo o mau array multiplicado por 2
})
//Por exemplo:
 const novoArrayy = array.map(item => {
 return item * 2;
 })
//é bom quando quero fazer ou executar alguma função com os elementos que estão dentro de algum array
//document.body.innerText = JSON.stringify(novoArray)
//Mas eu não consigo filtrar ou excluir algum elemento
 const novoArray = array.map(item => {
    if (item % 2 === 0) {
     return item * 10; //se existir números pares dentro desse array eu multiplico por 10
    }
    return item; //senão, retornarei o item sem multiplicar por nada
    })
    document.body.innerText = JSON.stringify(novoArray)
   //Como você acabou de ver, eu posso até fazer uma condicional dentro do map
 