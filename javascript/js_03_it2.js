let inputNum = -5;
if (inputNum == 0) {
    console.log('입력하신 숫자는 0 입니다.');
} else if (inputNum < 0) {
    console.log(`입력하신 숫자 ${inputNum}은 음수 입니다`);
} else {
    console.log('입력하신 숫자', inputNum, '은 양수 입니다.');
}

let inputScore = 88;
if (inputScore >= 90) {
    console.log('A');
} else if (inputScore >= 80) {
    console.log('B');
} else if (inputScore >= 70) {
    console.log('C');
} else if (inputScore >= 60) {
    console.log('D');
} else {
    console.log('F');
}

let skills = ['HTML', 'CSS', 'Javascript', 'React'];

if (skills.includes('Javascript') && skills.includes('React')) {
    console.log('합격');
} else if (skills.includes('Javascript') || skills.includes('React')) {
    console.log('예비');
} else {
    console.log('탈락');
}
