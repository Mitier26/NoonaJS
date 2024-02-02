let name = 'Molkang fruit store';
let fruits = ['banana', 'apple', 'mango'];
let address = 'Seoul';

let store = { name, fruits, address };

console.log(store);

console.log(`제 가게 이름은${name} 입니다. 위치는 ${address}에 있습니다`);

function calculate(obj) {
    let { a, b, c } = obj;
    return a + b + c;
}

console.log(calculate({ a: 1, b: 2, c: 3 }));

let name2 = 'Malkang store';
let fruits2 = ['banana', 'apple', 'mango'];
let address2 = {
    country: 'Korea',
    city: 'Seoul',
};

function findStore(obj) {
    let {
        name2,
        address2: { city },
    } = obj;
    console.log(name2);
    console.log(city);
    return name2 == 'Malkang store' && city == 'Seoul';
}

console.log(findStore({ name2, fruits2, address2 }));

function getNumber() {
    let array = [1, 2, 3, 4, 5, 6];
    let [first, , third, forth] = array;
    return { first, third, forth };
}
console.log(getNumber());

function getCalendar(first, ...rest) {
    return first === 'January' && rest[0] === 'February' && rest[1] === 'March' && rest[2] === undefined;
}
console.log(getCalendar('January', 'February', 'March'));

function getMinimum() {
    let a = [45, 23, 78];
    let b = [54, 11, 9];
    return Math.min(...a, ...b);
}
console.log(getMinimum());

function sumNumber() {
    const sum = (a, b) => a + b;
    return sum(40, 10);
}

function sumNumber2() {
    return addNumber(1)(2)(3);
    function addNumber(a) {
        return function (b) {
            return function (c) {
                return a + b + c;
            };
        };
    }
}
console.log(sumNumber2());

function sumNumber3() {
    addNumber = (a) => (b) => (b) => a + b + c;
    return addNumber(1)(2)(3);
}
