function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}

// multiRand(n) :
// Cette fonction génère un tableau de "n" nombres aléatoires entre 1 et 10
// Paramètre : n (nombre) - le nombre de valeurs aléatoires à générer
// Retour : un tableau contenant n nombres aléatoires

function multiRand(n) {
  const tableau = [];
  for (let i = 0; i < n; i++) {
    tableau.push(rand10());
  }
  return tableau;
}


const n = prompt('Combien de nombres aléatoires voulez-vous générer ?');
const nombres = multiRand(n);
console.log(nombres);
alert(`Les ${n} nombres aléatoires générés sont : [${nombres}]`);