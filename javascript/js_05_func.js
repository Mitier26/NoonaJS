function greet(name) {
    console.log('안녕! 나는' + name + ' 입니다.');

    return name;
}

function meetAt(year, month, day) {
    let str = '';
    if (day != '') {
        str = year + '/' + month + '/' + day;
    } else if (month != '') {
        str = year + '년 ' + month + '월';
    } else if (year != '') {
        str = year + '년';
    }

    return str;
}

function findSmallestElement(arr) {
    let result = 0;
    if (arr.length == 0) return result;
    else {
        result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < result) {
                result = arr[i];
            }
        }
    }

    return result;
}

function howmuch(pay) {
    let count = 0;

    count = Math.floor(pay / 50000);
    pay -= count * 50000;
    console.log('50000 X ' + count);
    count = Math.floor(pay / 10000);
    pay -= count * 10000;
    console.log('10000 X ' + count);
    count = Math.floor(pay / 5000);
    pay -= count * 5000;
    console.log('5000 X ' + count);
    count = Math.floor(pay / 1000);
    pay -= count * 1000;
    console.log('1000 X ' + count);
    count = Math.floor(pay / 500);
    pay -= count * 500;
    console.log('500 X ' + count);
    count = Math.floor(pay / 100);
    pay -= count * 100;
    console.log('100 X ' + count);
}

console.log(howmuch(12300));
