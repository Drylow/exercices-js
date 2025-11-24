function calcDistance(pointA, pointB) {
  const distance = Math.sqrt(Math.pow(pointB[0] - pointA[0], 2) + Math.pow(pointB[1] - pointA[1], 2));
  return Math.round(distance * 100) / 100;
}


const pointA = prompt('Entrez les coordonnées du point A (format: x,y)');
const pointB = prompt('Entrez les coordonnées du point B (format: x,y)');

const coordA = pointA.split(',').map(Number);
const coordB = pointB.split(',').map(Number);

const distance = calcDistance(coordA, coordB);
console.log('Distance entre les points A et B : ' + distance);
alert(`La distance entre les points A et B est : ${distance}`);