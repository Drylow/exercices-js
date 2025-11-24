function sommeArr(arr) {
    let somme = 0;

    for (let num of arr) {
        somme += num;
    }

    return somme;
}




let arr1  = [1, 2, 3, 4, 5];
console.log(`La somme de [${arr1}] est : ${sommeArr(arr1)}`);

let arr2 = [100, 101, 102];
console.log(`La somme de [${arr2}] est : ${sommeArr(arr2)}`);
