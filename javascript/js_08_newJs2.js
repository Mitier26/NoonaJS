let name = 'Molkang';
let age = 25;

// 예전의 객체를 만드는 방법
let person = { name: name, age: age };

// 신기능 객체 자동으로 변수의 이름으로 키값을 만들고 값을 넣는다.
let person1 = { name, age };
// 키 값과 변수의 이름이 다르면 옛 방식을 사용해야 한다.

let bts = {
    name: '방탄소년단',
    num: 7,
};

// 객체를 변수로 분리하기
// 객체에 있는 것을 꺼내 새로운 변수로 만들는 방법
let name1 = bts.name;
let num = bts.num;

// 객체의 키값을 입력하면 객체에 있는 값을 자동으로
// 새로운 변수를 만든다.
let { name2, num2 } = bts;

//배열의 새로운 문법

let array = [1, 2, 3];

// 예전 방식의 배열값 가지고 오기
let a = array[0];
let b = array[1];
let c = array[2];

// 새로운 배열의 값을 가지고 오기
let [a1, b1, c1] = array;

let [a2, ...rest] = array;
console.log(rest);
// a2를 뺀 나머지가 rest에 들어 간다.

let person2 = {
    name: 'noona',
    age: 19,
    cute: true,
};

let { name3, ...restInfo } = person;
// 이름은 변수로 빼져 나온다.
console.log(name3);
// 이름을 제외한 나머지는 다시 객체로 묶인다.
console.log(restInfo);

let aa = [1, 2];
let bb = [3, 4];
let cc = [5, 6];

let resultArray = aa.concat(bb, cc);
console.log(resultArray);

resultArray = [...aa, ...bb, ...cc];
console.log(resultArray);
// ... 은 aa 에 있는 내용을 복사해 온다.

// 함수 선언 방식
function foo() {
    console.log('hello');
}

// 함수를 변수처럼 만든다.
let foo1 = () => {
    console.log('hello');
};
// => 는 함수

// return 생략 가능하다. 문장이 1개이면 생략 가능하다.
let foo2 = () => 'hahaha';
// 리턴이 있고 문장이 1개일 때 사용할 수 있다.

// this
let age3 = 17;
let person3 = {
    name3: 'hege',
    age3: 20,
    getInfo: function () {
        console.log(age3);
    },
};

person3.getInfo();
// 이것을 실행하면 전역 번수를 가지고 온다.
// 같은 레밸에 있는 20를 가지고 오지 않는다.
// 이때 사용하는 것이 this 이다.
// this : 나를 불러준 객체!!!!
// this : 함수에 있는 것이다. 이 것을 실행 하는 함수에 있는 것
// () => 함수는 this가 없다 <============ 매우 중요
// this 를 하면 window가 나온다.
// person3 가 있는 곳을 this라고 인식해 window가 출력된다.
