// Un prompt s'affiche avec la question suivante
let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Convertir la saisie en nombre entier
nombre = parseInt(nombre);

// Définition de la fonction factorielle
function factorielle(n) {
  let resultat = 1;
  for (let i = n; i >= 1; i--) {
    resultat *= i;
  }
  return resultat;
}

// Calcul de la factorielle et affichage du résultat dans la console
console.log("Le résultat est : " + factorielle(nombre));
