const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps, perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("1. Tous les livres ont-ils été empruntés au moins une fois ?");
const tousEmpruntes = books.every(book => book.rented > 0);
console.log(tousEmpruntes);

// Quel est le livre le plus emprunté ?
console.log("2. Le livre le plus emprunté :");
const livrePlusEmprunte = books.reduce((prev, current) => (prev.rented > current.rented) ? prev : current);
console.log(livrePlusEmprunte);

// Quel est le livre le moins emprunté ?
console.log("3. Le livre le moins emprunté :");
const livreMoinsEmprunte = books.reduce((prev, current) => (prev.rented < current.rented) ? prev : current);
console.log(livreMoinsEmprunte);

// Trouve le livre avec l'ID: 873495
console.log("4. Livre avec l'ID 873495 :");
const livreID873495 = books.find(book => book.id === 873495);
console.log(livreID873495);

// Supprime le livre avec l'ID: 133712
console.log("5. Suppression du livre avec l'ID 133712 :");
const indexLivreID133712 = books.findIndex(book => book.id === 133712);
if (indexLivreID133712 !== -1) {
  books.splice(indexLivreID133712, 1);
}
console.log("Livre avec l'ID 133712 supprimé.");

// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
console.log("6. Livres triés par ordre alphabétique (sans celui avec l'ID 133712) :");
const livresTries = books.filter(book => book.id !== 133712).sort((a, b) => a.title.localeCompare(b.title));
console.log(livresTries);
