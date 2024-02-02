window.onload = function () {
    // 요소를 찾기
    let userElement = document.getElementById('userInput');
    let result = document.getElementById('result');
    let chanceElement = document.getElementById('chance');
    let goBtn = document.getElementById('go');
    let resetBtn = document.getElementById('reset');

    let chance = 0;
    let comNum = 0;
    let gameOver = false;

    let arr = [];

    gameSetting();

    function gameSetting() {
        chance = 6;
        changeChance();
        comNum = makeComNumber();
        goBtn.disabled = false;
        userElement.value = null;
        result.innerText = '업 & 다운 게임 숫자를 찾아라!';
        gameOver = false;
    }

    function changeChance() {
        chance--;
        chanceElement.innerText = chance;
        if (chance < 1) {
            gameOver = true;
        }
    }

    // 1 ~ 100 까지 랜던한 숫자를 만들고 반환하는 함수
    function makeComNumber() {
        let rand = Math.floor(Math.random() * 100) + 1;
        return rand;
    }

    // 입력한 숫자와 컴퓨터의 숫자를 확인 하는 함수, String 반환
    function checkNumber(userNum, comNum) {
        let result = '';

        if (userNum < 1 || userNum > 100) return '1 부터 100 사이의 숫자를 입력 해주세요';

        if (arrayCheck(userNum)) return userNum + ' 이미 입력한 숫자입니다. 다른 숫자를 입력해주세요';

        changeChance(chance);

        arr.push(userNum);

        if (userNum == comNum) {
            result = "That'g great";
            gameOver = true;
        } else if (userNum > comNum) {
            result = 'UP';
        } else if (userNum < comNum) {
            result = 'Down';
        }

        return result;
    }

    function arrayCheck(userNum) {
        for (let i = 0; i < arr.length; i++) {
            if (arr.includes(userNum)) {
                return true;
            } else {
                return false;
            }
        }
    }

    userElement.addEventListener('focus', function () {
        userElement.value = null;
    });

    // 버튼이 클릭 되었을 때 실행 되는 부분
    goBtn.addEventListener('click', function () {
        // 유저가 입력한 값을 가지고 온다.
        let userNum = userElement.value;

        result.innerText = checkNumber(userNum, comNum);

        this.disabled = gameOver;
    });

    resetBtn.addEventListener('click', function () {
        gameSetting();
    });
};
