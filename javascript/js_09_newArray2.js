let names = [
    'Steven Paul Jobs',
    'Bill Gates',
    'Mar Elliot Zuckerberg',
    'Elon Musk',
    'Jeff Bezos',
    'Warren Edward Buffett',
    'Larry Page',
    'Larry Ellision',
    'Tim Cook',
    'Lloyd Blackfein',
];

// function printName(item) {
//     console.log(item);
// }

// names.forEach(printName);

// names.forEach(function (item) {
//     console.log(item);
// });

// names.forEach((item) => {
//     console.log(item);
// });

// names.forEach((item, index) => console.log(item, index));

// let data = names.map((item, index) => {
//     return item;
// });

// console.log(data);

// data = names.filter((item) => {
//     return item.startsWith('L');
// });

// console.log(data);

// // 데이터에 L 로 시작하는 것이 있으면 true
// data = names.some((item) => {
//     return item.startsWith('L');
// });
// console.log(data);

// // 모든 item이 L로 시작하면 true
// data = names.every((item) => {
//     return item.startsWith('L');
// });

// // L로 시작하는 것을 찾으면 반환한다.
// data = names.find((item) => {
//     return item.startsWith('L');
// });

// map 문제
let newNames = names.map((item) => {
    return item.toUpperCase();
});
console.table(newNames);

newNames = names.map((item) => {
    return item.split(' ')[0];
});
console.table(newNames);

newNames = names.map((item) => {
    let a = item.split(' ');
    let r = '';
    a.forEach((item) => {
        r += item[0];
    });
    return r;
});
console.table(newNames);

//filter 문제
//filter는 해당 조건에 맞는 것을 배열로 반환한다.
newNames = names.filter((item) => {
    return item.includes('a');
});
console.table(newNames);

// 다시 풀어아 하는 부분
// 이름에 같은 문자가 연속해서 들어간 사람 출력
// 최종적으로 반환해야 하는 것은 이름이다.
newNames = names.filter((item) => {
    // item 은 이름 전체가 들어 온다.
    // console.log('같은 이름 : ', item);
    // 이름을 _ 기준으로 나눈다.
    // console.log(item.split(' '));
    // split는 잘려진 배열을 반환한다.
    // 잘려진 이름에서 각 인덱스에 접근해야 한다.
    // 그러나 여기에서는 전체 글자에서 반복되는 것을 찾는다.
    let l = item.split('');

    return l.some((innerItem, index) => {
        return innerItem == l[index + 1];
    });
});
console.table(newNames);

// some 문제
console.log(
    names.some((item) => {
        return item.length >= 20;
    })
);

// some문제
// 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관x)
// 1.성을 제외한다.
// 2.전부 소문자로 변경한다.
// 3.p 가 있는지 확인한다.
// 새로운 배열을 만들 필요가 없다 참, 거짓만 필요

console.log(
    names.some((item) => {
        // 성은 가장 뒤에 것
        let l = item.split(' ');
        l.pop(); // 성을 제거

        // 소문자로 변경
        return l.some((innerItem) => {
            return innerItem.toLocaleLowerCase().includes('p');
        });
    })
);

// every
// 모두의 이름이 20자 이상이니?
console.log(
    names.every((item) => {
        return item.length >= 20;
    })
);

// 모두의 이름에 a 가 있니?
console.log(
    names.every((item) => {
        return item.includes('a');
    })
);

// find
// 전체의 이름길이가 20자 이상은 인간은?
console.log(
    names.find((item) => {
        return item.length >= 20;
    })
);

// 미들네임이 포함되어 잇는 사람은
// " " 으로 잘랐을 때 길이가 3 인 것
console.log(
    names.find((item) => {
        let l = item.split(' ');
        return l.length > 2;
    })
);

// findIndex
// 전체 이름의 길이가 20자 이상안 사람의 번호
console.log(
    names.findIndex((item) => {
        return item.length >= 20;
    })
);

console.log(
    names.findIndex((item) => {
        let l = item.split(' ');
        return l.length > 2;
    })
);
