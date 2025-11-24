// Version 1 (while) //
console.log("Version 1 : Nombres pairs avec while.")

let i = 1;

while (i <= 100) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i += 1;
}

// Version 2 (for) //
console.log("Version 2 : Nombres pairs avec for.")

for(let j = 2; j <= 100; j += 2) {
    console.log(j);
}