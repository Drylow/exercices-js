let n = Number(prompt("Veuillez entrer un nombre :"));

alert(`Veuillez entrer ${n} nombres :`);

let somme = 0;
for(let i = 0; i < n; i++) {
    let nombre = Number(prompt("Entrez le nombre " + (i + 1) + " :"));
    somme += nombre;
}
alert("La somme des " + n + " nombres est : " + somme);