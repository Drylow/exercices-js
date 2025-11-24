/**
 * Génère un nombre entier aléatoire entre 1 et 10
 * * @returns {number} Un entier aléatoire entre 1 et 10
 */
function rand10() {
  // Math.random() donne un nombre entre 0 (inclus) et 1 (exclu)
  // Multiplier par 10 donne un nombre entre 0 et 9.999...
  // Math.floor() arrondit cet nombre à l'entier inférieur (donc entre 0 et 9)
  return Math.floor(Math.random() * 10) + 1;
}


console.log("Résultats de la fonction rand10()");


console.log("1er tirage aléatoire : " + rand10()); 
console.log("2e tirage aléatoire : " + rand10()); 
console.log("3e tirage aléatoire : " + rand10()); 
console.log("4e tirage aléatoire : " + rand10());
