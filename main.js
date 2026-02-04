let input;

do{
  input = Number(prompt("Inserire Numero del Prodotto  1 Acqua 2 Coca-cola 3 Birra"));

  switch(input) {
    case 1:
      console.log("è stata selezionata l'Acqua");
      break;
  case 2:
      console.log("è stata selezionata la Coca-cola");
      break;
  case 3:
      console.log("è stata selezionata la Birra");
      break;
  default: 
      console.log("Scelta non valida, riprova")

  }
}while(input < 1 || scelta > 3)