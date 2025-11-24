function calculMoyenne(arr) {
    let somme = 0;

    for (let num of arr) {
        somme += num;
    }

let moyenne = somme / arr.length;
return moyenne;
}  

let arr1 = [1, 2, 3, 4, 5];
console.log(`La moyenne de [${arr1}] est : ${calculMoyenne(arr1)}`);

let arr2 = [100, 101, 102];
console.log(`La moyenne de [${arr2}] est : ${calculMoyenne(arr2)}`); 
