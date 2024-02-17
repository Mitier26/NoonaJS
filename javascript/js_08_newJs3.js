let name = "noona's fruit store";
let fruits = ['banana', 'apple', 'mango'];
let address = 'Seoul';

let store = { name: name, fruits: fruits, address: address };
console.log(store);

let store2 = { name, fruits, address };
console.log(store2);

console.log(`제 가게 이름은 ${store2.name} 입니다. 위치는 ${store2.address} 에 있습니다.`);

function calculate(obj) {
    let { a, b, c } = obj;
    return a + b + c;
}

console.log(calculate({ a: 1, b: 2, c: 3 }));

let name1 = 'noona store';
let fruits1 = ['banana', 'apple', 'mango'];
let address1 = {
    country: 'Korea',
    city: 'Seoul',
};

function findStore(obj) {
    // let { name1, city = address1.city } = obj;
    // let {name1, address1} = obj;
    // let city = address1.city;
    let {
        name1,
        address1: { city },
    } = obj;
    return (name1 = 'noona store' && city == 'Seoul');
}

// 여기서 사용되는 것은 객체를 만드는 방법
// ES6 신기능으로 객체를 분해하는 방법
// 이 동시에 사용되고 있다.
// 객체를 분해하는 방법은 객체에 있는 변수의 이름과 새로 만들어 지는 변수의 이름을 같게 하는 것이다.
function test(obj) {
    let { a, b, c } = obj; // 여기서 새로운 변수  a,b,c를 만든다.
    console.log(a, b, c);
}
test({ a: 1, b: 2, c: 3 }); // a : 1 에서 a 는 key 이다.

// *** 객체를 분해 하기 위해서는 key값과 같은 변수 이름이 필요하다.
// name1, fruit1는
console.log(findStore({ name1, fruits1, address1 }));

function getNumber() {
    let array = [1, 2, 3, 4, 5, 6];
    let [first, , third, forth, ,] = array; // 변수를 만들어 배열의 값을 넣는다.
    return { first, third, forth }; // 객체를 만든다.
}
console.log(getNumber());

function getCalender(first, ...rest) {
    console.log(first);
    console.log(rest[0]);
    console.log(rest[2]);
    return first === 'January' && rest[0] === 'February' && rest[1] === 'March' && rest[2] === undefined;
}

console.log(getCalender('January', 'February', 'March'));

function getMinimum() {
    let a = [45, 23, 78];
    let b = [54, 11, 9];
    let c = [];
    c.concat(a, b); // concat은 새로운 배열을 반환한다.
    // 그래서 반환 값을 다른 곳에 넣어 주어야한다.
    console.table(c);
    console.log(...a);
    console.log(...b);
    let d = [...a, ...b];
    console.log(d);
    return Math.min(...a, ...b);
    // ...배열
    // 배열 내부의 값을 전개. 펼쳐놓으라는 것이다.
    // ...a 를 하면 a 내부에 있는 45,23,78이 나온다.
    // Math.min(...a,...b); 는
    // Math.min(45,23,78,54,11,9) 랑 같은 뜻이다.
}
console.log(getMinimum());

function sumNumber() {
    const sum = function (a, b) {
        return a + b;
    };
    return sum(40, 10);
}

console.log('sumNumber : ', sumNumber());

function sumNumber1() {
    const sum = (a, b) => a + b;

    return sum(40, 10);
}

console.log('sumNumber1: ', sumNumber1());

function sumNumber3() {
    return addNumber(1)(2)(3);

    function addNumber(a) {
        return function (b) {
            return function (c) {
                return a + b + c;
            };
        };
    }
}
console.log('sumNumber3: ', sumNumber3());

function sumNumber4() {
    let addNumber = (a) => (b) => (c) => a + b + c;
    return addNumber(1)(2)(3);
}

console.log('sumNumber4 :', sumNumber4());
