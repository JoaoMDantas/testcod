function filter_list(l) {

let filterlist=[];
 for(let i=0; i<l.length; i++){
   if (typeof l[i] !== 'string'){
     filterlist.push(l[i]);
   }
 }
  return filterlist;
  }
  
 //primeiro iniciei uma função e passei uma varíavel 
 //após isso iniciei um loop para percorrer uma lista
 //se o item dá varíavel for diferente de uma string, vai ser puxado para a varíavel que eu declarei


  function unique_in_order(sequence) {
  if (!sequence) {
    return []; // Retorna uma lista vazia se a sequência for nula ou vazia
  }

  let uniqueList = []; // Lista para armazenar os elementos únicos

  // Converte a sequência em um array, se ainda não for um
  if (typeof sequence === 'string') {
    sequence = sequence.split('');
  }

  // Itera sobre a sequência
  for (let i = 0; i < sequence.length; i++) {
    // Verifica se o elemento atual já foi adicionado à lista de elementos únicos
    if (uniqueList.indexOf(sequence[i]) === -1) {
      uniqueList.push(sequence[i]);
    }
  }

  return uniqueList;
}
//dentro da função o primeiro if descobre se é uma string, se sim transforma em um array
//dentro do for o if identifica se aquele item que o for está passando já existe na uniquelist
//se ele não existir é puxado para unique list
//essa função serve para puxar um item apenas uma vez em uma matriz que ele se repete

var uniqueInOrder=function(sequence) {
  if (!sequence) {
    return []; 

   let uniqueList = []; 
  
  for (let i = 0; i < sequence.length; i++) {
   
    if (sequence[i] !== sequence[i + 1]) {
      uniqueList.push(sequence[i]);
    }
  }

  return uniqueList;}}
//já aqui dentro do for, o if testa se a sequence é diferente do prox item, se sim adiciona o item na uniquelist
//outra forma seria colocar && para que analizasse se o item anterior é igual tb
// pois assim repeteria apenas um item dentro de uma repetição da mesma letra ou numero
function persistence(num) { 
  let newN=num.toString();
  let persistenceCount=0;
  
  for( let i=0;newN.length>1;i++){
   newN= newN.split('').reduce((a,b) =>a*b).toString();
    persistenceCount++;
    
  }
 return  persistenceCount;
}
//primeiro vamos trasnforma o número passado em uma string
// declaramos uma varíavel para pode contar quantas vezes calculamos até ter uma casa decimal
//dentro do for, se  a contagem de casas decimais do número for maior que 1, contiua a calcular
//o loop é baseado em pegar a string e transformar em array, pegando cada número separadamente e multiplicando-os
//depois que isso é feito o resultado final é transformado em stringe a contagem em persistence aumenta em 1
//assim ele faz esse processo novamente até termos apenas uma casa decimal