// - Donnez un algorithme qui permet de trouver le nombre d’occurrences d’une valeur dans un tableau de 20 valeurs entières.

// var tableau:entiers, nbOccurences:entier ,valeurRecherchee:entier

// debut
// tableau <-
// [45, 23, 55, 1, 23, 42, 99, 101, 200, 42, 42, 42, 0, 1, 3, 69, 77, 5, 5, 6]
// valeurRecherchee <-42
// nbOccurences<-0

// pour i allant de 0 a taille tableau - 1 pas de 1 faire
// si valeurRecherchee = tableau[i] alors
// nbOccurences <- nbOccurences +1
// fin si

// fin pour

// afficher valeurRecherchee, nbOccurences

// fin
const tableau = [
    45, 23, 55, 1, 23, 42, 99, 101, 200, 42, 42, 42, 0, 1, 3, 69, 77, 5, 5, 6,
  ];
  const valeurRecherchee = 42;
  let nbOccurences = 0;
  
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] == valeurRecherchee) {
      nbOccurences++;
    }
  }
 // ` BACKTICK ou BACKQUOTE pour intégrer entre () et ${}`
  console.log(`nombre d'occurances de ${valeurRecherchee} ; ${nbOccurences}`);