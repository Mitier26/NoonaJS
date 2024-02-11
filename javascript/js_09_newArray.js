let names = [
    'Steven Paul Jobs',
    'Bill Gates',
    'Mark Elliot Zuckerberg',
    'Elon Musk',
    'Jeff Bezos',
    'Warren Edward Buffett',
    'Larry Page',
    'Larry Ellison',
    'Tim Cook',
    'Lloyd Blankfein',
];

let result = names.map((item) => {
    return item.toUpperCase();
});
console.log(result);

result = names.map((item) => {
    return item.split(' ')[0];
});
console.log(result);

result = names.map((item) => {
    let sp = item.split(' ');
    let a = '';
    sp.map((item) => {
        a += item[0];
    });
    return a;
});
console.log(result);

result = names.filter((item) => {
    return item.match('a');
});
console.log(result);

result = names.filter((item) => {
    let b = item.split('');
    return b.some((innerItem, index) => {
        return innerItem == b[index + 1];
    });
});
console.log(result);

result = names.some((item) => {
    return item.length >= 20;
});
console.log(result);

result = names.some((item) => {
    let name = item.split(' ');
    name.pop;
    return name.some((innerItem) => {
        return innerItem.toLocaleLowerCase().includes('p');
    });
});
console.log(result);

result = names.every((item) => {
    return item.length >= 20;
});
console.log(result);

result = names.every((item) => {
    return item.includes('a');
});
console.log(result);

result = names.find((item) => {
    return item.length >= 20;
});
console.log(result);

result = names.find((item) => {
    return item.split(' ').length > 2;
});
console.log(result);

result = names.findIndex((item) => item.length >= 20);
console.log(result);

result = names.findIndex((item) => item.split(' ').length > 2);
console.log(result);
