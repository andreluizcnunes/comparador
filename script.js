function compNumber(n1, n2){
  const firstFrase = criarPrimeiraFrase(n1, n2);
  const lastFrase = criarSegundaFrase(n1, n2);
  
  return `${firstFrase} ${lastFrase}`;
}

function criarPrimeiraFrase(n1, n2) {
  let firstFrase = `Os números ${n1} e ${n2}`;
  let simNao = 'não';
  
  if(n1 === n2) {
    simNao = '';
  }
  
  return `${firstFrase} ${simNao} são iguais`;
}

function criarSegundaFrase(n1, n2) {
  const soma = n1 + n2;
  let comparaDez = 'menor';
  let comparaVinte = 'menor';
  
  if (soma > 10) {
    comparaDez = 'maior';
  }
  
  if (soma > 20) {
    comparaVinte = 'maior';
  }
  
  return `Sua soma é ${soma},\nque é ${comparaDez} do que 10 e ${comparaVinte}  do que 20.`
}


let num1 = Number(prompt("Digite o primeiro Numero"));
let num2 = Number(prompt("Digite o segundo Numero"));
alert(compNumber(num1, num2));