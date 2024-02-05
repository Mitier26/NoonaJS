function greet() {
    return '안냥. 내 이름은 홍길동 이야';
}

function greet(name) {
    console.log(`1안녕 내 이름은 ${name} 이야`);
}

function greet(name) {
    return `2안녕 내 이름은 ${name} 이야`;
}
greet('몰캉이');
console.log(greet('과연 무엇이 실행될까?'));

function meetAt(year, month, day) {
    if (day != null) {
        return `${year}/${month}/${day}`;
    } else if (month != null) {
        return `${year}년 ${month}월`;
    } else {
        return `${year}년`;
    }
}

function meetAt2(year, month, day) {
    const formattedYear = year != null ? String(year).padStart(4, '0') : null;
    const formattedMonth = month != null ? String(month).padStart(2, '0') : null;
    const formattedDay = day != null ? String(day).padStart(2, '0') : null;

    if (formattedDay != null) {
        return `${formattedYear}/${formattedMonth}/${formattedDay}`;
    } else if (formattedMonth != null) {
        return `${formattedYear}년 ${formattedMonth}월`;
    } else {
        return `${formattedYear}년`;
    }
}
console.log(meetAt(2024));
console.log(meetAt(2024, 2));
console.log(meetAt2(99, 2, 6));

function findSmallestElement(arr) {
    let smallNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallNum) {
            smallNum = arr[i];
        }
    }

    return smallNum;
}

console.log(findSmallestElement([100, 200, 73, 30, 26, 11]));

function moneyChanger(money) {
    let a = 0;
    if (money >= 50000) {
        let a = Math.floor(money / 50000);
        money -= a * 50000;
        console.log(`50000 x ${a}`);
    } else {
        console.log('50000 x 0');
    }

    if (money >= 10000) {
        let a = Math.floor(money / 10000);
        money -= a * 10000;
        console.log(`10000 x ${a}`);
    } else {
        console.log('10000 x 0');
    }

    if (money >= 5000) {
        let a = Math.floor(money / 5000);
        money -= a * 5000;
        console.log(`5000 x ${a}`);
    } else {
        console.log('5000 x 0');
    }

    if (money >= 1000) {
        let a = Math.floor(money / 1000);
        money -= a * 1000;
        console.log(`1000 x ${a}`);
    } else {
        console.log('1000 x 0');
    }

    if (money >= 500) {
        let a = Math.floor(money / 500);
        money -= a * 500;
        console.log(`500 x ${a}`);
    } else {
        console.log('500 x 0');
    }

    if (money >= 100) {
        let a = Math.floor(money / 100);
        money -= a * 100;
        console.log(`100 x ${a}`);
    } else {
        console.log('100 x 0');
    }
}

moneyList = [50000, 10000, 5000, 1000, 500, 100];

function moneyChanger2(money) {
    for (let i = 0; i < moneyList.length; i++) {
        if (money >= moneyList[i]) {
            let a = Math.floor(money / moneyList[i]);
            money -= a * moneyList[i];
            console.log(`${moneyList[i]} x ${a}`);
        } else {
            console.log(`${moneyList[i]} x 0`);
        }
    }
}

moneyChanger(12300);
moneyChanger2(12300);
