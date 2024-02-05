let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 50; i++) {
    let result = '';
    let strNum = '' + i;

    for (let j = 0; j < strNum.length; j++) {
        if (strNum[j] == '3' || strNum[j] == '6' || strNum[j] == '9') {
            result += '짝';
        }
    }

    if (result == '') {
        result = strNum;
    }

    console.log(result);
}

inputNum = 17;
result = inputNum + '은 소수임';

if (inputNum == 1) {
    result = '1은 소수가 아님';
} else {
    for (let i = 2; i < inputNum; i++) {
        if (inputNum % i == 0) {
            result = inputNum + '은 소수가 아님';
            break;
        }
    }
}

console.log(result);
