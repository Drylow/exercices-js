function duplicateArray(arr) {
    return [...arr];
}

let arr2 = [1, 2, 3, 4, 5];
let copie2 = duplicateArray(arr2);
console.log(`Tableau original : [${arr2}]`);
console.log(`Tableau dupliqué : [${copie2}]`);