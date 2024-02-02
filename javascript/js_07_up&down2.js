// 랜덤 번호 저장
// 유저가 번호를 입력
// go 버튼 누름
// 랜덤 번호 < 유저 번호 : Down!!
// 랜덤 번호 > 유저 번호 : up!!
// Reset 버튼 : 게임 리셋
// 5번의 기회가 있다.
// 기회가 0이 되면 게임 종료, 버튼 작동 안함.

let computerNum = 0;
let playBtn = document.getElementById('play-btn');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetBtn = document.getElementById('reset-btn');
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById('chance-area');
let history = [];

playBtn.addEventListener('click', play);
resetBtn.addEventListener('click', reset);
userInput.addEventListener('focus', function () {
    userInput.value = '';
});

// 랜덤 번호 찾기
function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
}

function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = '1과 100사이 숫자를 입력해주세요';
        return;
    }

    if (history.include(userValue)) {
        resultArea.textContent = '이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요';
    }

    chances--;
    chanceArea.textContent = `남은 기회 :  ${chances}번`;

    if (userValue < computerNum) {
        resultArea.textContent = 'UP!!';
    } else if (userValue > computerNum) {
        resultArea.textContent = 'DOWN!!';
    } else {
        resultArea.textContent = '맞췄습니다';
        gameOver = true;
    }

    history.push(userValue);

    if (chances < 1) {
        gameOver = true;
    }

    if (gameOver) {
        playBtn.disabled = true;
    }
}

function reset() {
    userInput.value = '';
    pickRandomNum();

    resultArea.textContent = '결과창';
}

pickRandomNum();
