let number = -1;

if (number == 0) {
    console.log('0 입니다');
} else if (number < 0) {
    console.log(number + ' 는 음수 입니다.');
} else {
    console.log(number + ' 는 양수 입니다.');
}

let score = 95;
if (score >= 90) {
    console.log('A 학점');
} else if (score >= 80) {
    console.log('B 학점');
} else if (score >= 70) {
    console.log('C 학점');
} else if (score >= 60) {
    console.log('D 학점');
} else {
    console.log('F 학점');
}

let skills = ['HTML', 'CSS', 'Javascript', 'React'];

if (skills.includes['Javascript'] && skills.includes['React']) {
    console.log('합격입니다');
} else if (skills.includes['Javascript'] || skills.includes['React']) {
    console.log('예비 합격입니다.');
} else {
    console.log('불합격 입니다');
}
