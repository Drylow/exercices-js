function factorial(a) {
  if (a === 0 || a === 1) {
    return 1;
  }
  return a * factorial(a - 1);
}


const nombre = prompt('Entrez un nombre pour calculer sa factorielle :');
const resultat = factorial(Number(nombre));
console.log('La factorielle de ' + nombre + ' est : ' + resultat);
alert(`La factorielle de ${nombre} est : ${resultat}`);