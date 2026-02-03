let input = prompt("Inserire Numero del Prodotto \n 1 Acqua \n 2 Coca-cola \n 3 Birra");

if (input == 1){
    console.log("E' stata selezionata l'Acqua");
} else if (input == 2){
    console.log("E' stata selezionata la Coca-cola");
} else if (input == 3){
    console.log("E' stata selezionata la Birra");
} else {
    while (input != 1 && input != 2 && input != 3) {
        input = prompt("Scelta non valida. Inserire Numero del Prodotto \n 1 Acqua \n 2 Coca-cola \n 3 Birra");
    }
    // Dopo il while, mostra la scelta valida
    if (input == 1){
        console.log("E' stata selezionata l'Acqua");
    } else if (input == 2){
        console.log("E' stata selezionata la Coca-cola");
    } else if (input == 3){
        console.log("E' stata selezionata la Birra");
    }
}