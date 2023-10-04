alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1) ;//sem o +1, teremos números entre 0 e 9, com +1 teremos número entre 0 e 10.
//*10 vai de 1 a 10
//*100 vai de 1 a 100
console.log(numeroSecreto);
let chute ;
let tentativas = 1 //é o contador

while ( chute != numeroSecreto ){
   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if( chute == numeroSecreto ){
        //se a condição acima for verdadeira: PARE!!!, NÃO EXECUTE MAIS NADA DENTRO DO WHILE. Pule para a próxima linha fora do while
        break;
        
    }else{
        if ( numeroSecreto > chute ){
            alert(`O número secreto é maior que ${chute}`);
        }else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }
    //tentativas = tentativas + 1;
    tentativas++
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}` );
/*
if( tentativas > 1){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas` );
} else{
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa` );
}
*/