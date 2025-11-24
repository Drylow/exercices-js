/**
 * Calcule la surface d'un rectangle. 
 * * @param {number} longueur - La longueur du rectangle 
 * @param {number} largeur - La largeur du rectangle 
 * @returns {number} La surface du rectangle 
 */


let longueur = Number(prompt("Entrez la longueur du rectangle :"));
let largeur = Number(prompt("Entrez la largeur du rectangle :"));

function calcSurface(longueur, largeur) {
    return longueur * largeur;
}

console.log(`La surface du rectangle de longueur ${longueur} et de largeur ${largeur} est : ${calcSurface(longueur, largeur)}`);
alert(`La surface du rectangle de longueur ${longueur} et de largeur ${largeur} est : ${calcSurface(longueur, largeur)}`);