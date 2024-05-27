
// Ex 15

//     - Ecrire un algorithme qui affiche la table de multiplication de 2.
//     - Ecrire un algorithme qui affiche toutes les tables de multiplication.



// Var

// DEBUT

// pour i allant de 1 À 10 PAS DE 1 A faire
// afficher i *2

// FIN pour

// FIN


//table de multiplication de 2
for (let i = 1; i <= 10; i++) {
    console.log(i + " *2=", i * 2);
}
// table de multiplication d'aprés le chat
function afficherTableDeMultiplicationDe2() {
    console.log('Table de multiplication de 2 :');
    for (let i = 1; i <= 10; i++) {
      console.log(`2 x ${i} = ${2 * i}`);
    }
  }
  
  afficherTableDeMultiplicationDe2();

//toutes les tables de multiplication
for ( let table = 1; table <= 10; table++){
    for (let i = 1; i <= 10; i++) {
        // console.log(i + "x" +table+"=", i * table);
        console.log(`${i} x ${table} = ${i * table}`);
    }
}



//AFFICHE TOUTES LES TABLES DE MUTLITPLICATIONS d'après CHAT
//function afficherTablesDeMultiplication() {
    //for (let i = 1; i <= 10; i++) {
      //console.log(`Table de multiplication de ${i} :`);
     // for (let j = 1; j <= 10; j++) {
       // console.log(`${i} x ${j} = ${i * j}`);
      //}
     // console.log(''); // Ligne vide pour séparer les tables
   // }
  //}
  
  //afficherTablesDeMultiplication();

