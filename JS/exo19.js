// ### Ex 19

//     -Concevoir un algorithme qui imprime pour n donné : 
//         1
//         1 2
//         1 2 3
//         1 2 3 4
//         1 2 3 4 5
//         ........... 
//         1 2 3 4 5 6 ... n


// DEBUT
//  NBlIGNES <- 20

//  STR <- ""
//  POUR i ALLANT DE 1 A nbLignes PAS DE 1 FAIRE

// pour j allant de 1 a i pas de 1 faire
// Afficher j+""



//  FIN POUR
//  FIN

const nbLignes = 20;
let str = "";
for (let i = 1;i <= nbLignes; i++){
    str = "";
    //construire une chaine de caractères qui concatene les valeur de j     
for (let j = 1; j<=i; j++) {
    // str = str + j + ""; //str = "1"un espace str +j est exactement pareil que celui du dessous
    str += j +"";
}
console.log(str);
}



// Concevoir un algorithme qui imprime pour n donné : d'après le chat

// function imprimerSequence(n) {
//     for (let i = 1; i <= n; i++) {
//       let ligne = '';
//       for (let j = 1; j <= i; j++) {
//         ligne += j + ' ';
//       }
//       console.log(ligne.trim());
//     }
//   }
  
//   // Exemple d'utilisation
//   let n = 5;
//   imprimerSequence(n);
  