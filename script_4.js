const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
console.log("1. Entrepreneurs nés dans les années 70 :");
const entrepreneursAnnees70 = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
console.log(entrepreneursAnnees70);

// Sors une array qui contient le prénom et le nom des entrepreneurs
console.log("2. Prénom et nom des entrepreneurs :");
const prenomsNomsEntrepreneurs = entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);
console.log(prenomsNomsEntrepreneurs);

// Quel âge aurait chaque inventeur aujourd'hui ?
console.log("3. Âge des inventeurs aujourd'hui :");
const dateActuelle = new Date().getFullYear();
const agesAujourdhui = entrepreneurs.map(entrepreneur => {
  const age = dateActuelle - entrepreneur.year;
  return `${entrepreneur.first} ${entrepreneur.last} aurait ${age} ans aujourd'hui`;
});
console.log(agesAujourdhui);

// Trie les entrepreneurs par ordre alphabétique du nom de famille
console.log("4. Entrepreneurs triés par ordre alphabétique du nom de famille :");
const entrepreneursTries = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
console.log(entrepreneursTries);
