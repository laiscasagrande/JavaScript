const peloMenosUmItemNaoNumero = array.some(item => {
   return typeof item !== 'number'
})//diferente do every, o some não verifica se todos os itens satisfazem aquele consição; basta um satisfazer
document.body.innerText = JSON.stringify(peloMenosUmItemNaoNumero)