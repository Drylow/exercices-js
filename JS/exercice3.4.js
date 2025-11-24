function trouverMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let nombreActuel of arr) {
        if (nombreActuel < min) {
            min = nombreActuel;
        }
        if (nombreActuel > max) {
            max = nombreActuel;
        }

}

console.log(`Tableau : [${arr}]`);
console.log(`Minimum : ${min}`);
console.log(`Maximum : ${max}`);

}

let testArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
trouverMinMax(testArray);
let testArray2 = [-10, 0, 10, 20, -20, 5];
trouverMinMax(testArray2);