let result = 0;

for (let i = 1; i <= 100; i++) {
    result += i;
}

console.log('1 ~ 100 까지 더한 값 : ' + result);

let odd = '';
for (let i = 1; i <= 100; i += 2) {
    odd += i + ' ';
}
console.log('1 ~ 100 까지 홀수');
console.log(odd);

let strNum = '';
let result369 = '';

for (let i = 1; i <= 50; i++) {
    result369 = '';
    strNum = '' + i;

    for (let j = 0; j < strNum.length; j++) {
        if (strNum[j].includes('3') || strNum[j].includes('6') || strNum[j].includes('9')) {
            result369 += '짝';
        }
    }
    if (result369 == '') {
        result369 = strNum;
    }
    console.log(result369);
}

let inputNum = 11;
let sosu = true;

for (let i = 2; i < inputNum - 1; i++) {
    if (inputNum % i == 0) {
        sosu = false;
        break;
    }
}
console.log(sosu);
