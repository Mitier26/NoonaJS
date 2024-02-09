// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.table(animals.slice(1, 4));
// console.table(animals);

// console.log(animals);
// console.log(animals.splice(-2, 0));
// console.log(animals[-2]);
// console.table(animals.slice(-2, 1));
// console.log(animals.length - 1);
// console.log(animals[animals.length - 1]);
// console.table(animals.slice(animals.length - 2, 1));

// let fruits = ['apple', 'banana', 'orange'];

// console.log(fruits);
// console.log(fruits[1]);

// fruits.pop();
// console.log(fruits);

// let l = 11;
// for (k = 2; k < l; k++) {
//     console.log(k);
//     console.log(l);
//     console.log(l % k);
//     if (l % k === 0) {
//         console.log('false');
//     } else if (l === 1) {
//         console.log('false');
//     } else {
//         console.log('true');
//     }
// }

for (let i = 1; i <= 50; i++) {
    if (i % 10 === 3 || i % 10 === 6 || i % 10 === 9) {
        console.log('박수');
        if (i >= 30 && i <= 39) {
            console.log('박수');
        } else {
        }
    } else {
        console.log(i);
    }
}
