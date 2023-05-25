// Un prompt s'affiche avec la question suivante
let nombreEtages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// Convertir la saisie en nombre entier
nombreEtages = parseInt(nombreEtages);

// Boucle pour construire la pyramide
for (let i = 1; i <= nombreEtages; i++) {
  let ligne = '';
  for (let j = 1; j <= nombreEtages - i; j++) {
    ligne += ' ';
  }
  for (let k = 1; k <= i; k++) {
    ligne += '#';
  }
  console.log(ligne);
}
