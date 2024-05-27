// - Ecrire un algorithme qui calcule la somme de valeurs stockées dans un tableau.
// - Ecrire un algorithme qui permet de déterminer la plus grande des valeurs stockées dans un tableau.
// - Ecrire un algorithme qui permet de déterminer la plus petite des valeurs stockées dans un tableau.
// description=
// var tableau: entiers, somme: entiers
//  debut

//  tableau <= [2,5,3,10,99,1,80]
//  somme <= 0

//  pour i allant de 0 a longueur tableau - 1 pas de 1 faire
//   somme <= somme + tableau(i)

//   fin pour

//   afficher somme
//   fin

//   somme des elements d un tableau
const tableau = [2, 5, 3, 10, 99, 1, 80];
let somme = 0;

for (let i = 0; i < tableau.length; i++) {
  somme = somme + tableau[i];
}
console.log("somme:", somme);

// ---
// var tableau:entiers , max:entiers

// debut

// tableau <-(2,5,3,10,99,1,80]
//     max <- tableau[0]

//     pour i allant de 0 a taille tableau - 1 pas de 1 faire
//     si max < tableau[i] alors
//        max <- tableau[i]
//        fin si
// fin pour

// afficher max
// fin

// max des valeurs d un tableau
let max = tableau[0];
for (let i = 1; i < tableau.length; i++) {
  if (tableau[i] > max) {
    max = tableau[i];
  }
}
console.log("max: ", max);

// ---
// var tableau:entier ,min:entier
//  tableau <-[2,5,3,10,99,1,80]
//  min <- tableau[0]

//  pour i allant de 1 a taille tableau -1 pas de 1 faire
//     si min <tableau[i] alors
//     min <- tableau[i]
//     fin si
//     fin pour
//     afficher min
//     fin

// min des valeurs d un tableau
let min = tableau[0];
for (let i = 1; i < tableau.length; i++) {
  if (tableau[i] < min) {
    min = tableau[i];
  }
}
console.log("min :", min);