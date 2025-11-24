let min = Number(prompt("Veuillez entrer le nombre minimum (min) :"));
let max = Number(prompt("Veuillez entrer le nombre maximum (max) :"));
let current =Number(prompt("Veuillez entrer le nombre à tester (current) :"));

if (min > max) {
    console.log("Erreur");
    console.log(`Désolé, l'ordre des valeurs n'est pas correct. Le minimum (${min}) ne peut pas être supérieur au maximum (${max}).`);
    alert(`Désolé, l'ordre des valeurs n'est pas correct. Le minimum (${min}) ne peut pas être supérieur au maximum (${max}).`);
}

else if (current >= min && current <= max) {
    console.log(`Le nombre ${current} est entre ${min} et ${max}.`);
    alert(`Le nombre ${current} est entre ${min} et ${max}.`);
}

else {
    console.log("Résultat");
    console.log(`Le nombre ${current} n'est pas entre ${min} et ${max}.`);
    alert(`Le nombre ${current} n'est pas entre ${min} et ${max}.`);
}