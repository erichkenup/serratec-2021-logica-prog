  /*CATRACA:
  
  A catraca do onibus quebrou e a empresa precisa dos dados da viagem.
  Os dados necessários para a empresa são quando a pessoa entra no onibus são as seguintes:
  Quantas pessoas ja entraram no onibus até o momento; 
  Se a pessoa é pagante ou entra com gratuidade;
  O total dos ganho até o momento (Considerando a passagem a R$ 4,40).*/

  const ler = require("prompt-sync")();
  var lucro = 0.00;

  var ppl = ler("Quantas pessoas já tem no ônibus? ");

  while(ppl<30){
    var gratis=ler ("Tem gratuidade? S ou N: ");
      if((gratis=="S")||(gratis=="s")) ppl++;
      
      if((gratis=="N")||(gratis=="n")){
        ppl++;        
        lucro = lucro + 4.40;
      }
      console.log("Entraram",ppl,"pessoas até o momento");

  }
  console.log("O lucro foi de:",lucro);

  