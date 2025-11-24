
function pickLearner(inputAr, n) {
  const resultat = [];
  const copie = [...inputAr];
  
  for (let i = 0; i < n; i++) {
    const index = Math.floor(Math.random() * copie.length);
    resultat.push(copie[index]);
    copie.splice(index, 1);
  }
  
  return resultat;
}


const apprenants = ["Abdoul", "Dimitri", "Dorian", "Dorian", "Enrique", "Ethan", "Gaëtan", "Isaac", "Jason", "Johan", "Jonathan", "Julien", "Kevin", "Lindsay", "Lucas", "Léandre", "Matthias", "Micael", "Thomas"]
const n = 3;
const selectionnés = pickLearner(apprenants, n);
console.log(selectionnés);
alert(`Les ${n} apprenants sélectionnés sont : [${selectionnés}]`);