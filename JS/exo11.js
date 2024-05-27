// - Ecrire un algorithme qui affiche les nombres pairs entre 1 et 10.

for (let nombre = 1; nombre <= 10; nombre ++){
    if (nombre % 2 == 0){
        console.log(nombre);
    }
}

for (let nombre = 2; nombre <= 10; nombre += 2){
    console.log(nombre);
}
