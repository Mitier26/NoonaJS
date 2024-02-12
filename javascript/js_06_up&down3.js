window.onload = function () {
    const searchBtn = document.getElementById('search');
    const resetBtn = document.getElementById('reset');
    const chancesElement = document.getElementById('chance');
    const resultElement = document.getElementById('result');
    const userInput = document.getElementById('user-input');
    const resultImg = document.getElementById('result-img');

    const downImg = ['/images/down1.png', '/images/down1.png'];
    const upImg = ['/images/up1.png', '/images/up2.png'];
    const colors = ['red', 'orange', 'yellow', 'blue', 'green', 'lightgreen'];

    let comNum = 0;
    let chance = 5;
    let gameOver = false;
    let userNumList = [];

    setRandomNum();

    searchBtn.addEventListener('click', search);
    resetBtn.addEventListener('click', reset);
    userInput.addEventListener('focus', clear);

    // 랜덤 숫자를 만든다.
    function setRandomNum() {
        comNum = Math.floor(Math.random() * 100) + 1;
    }

    console.log(comNum);
    chancesElement.style.color = colors[chance];
    chancesElement.style.fontSize = `${chance}vw`;
    // 찾기 버튼을 눌렀을 때
    function search() {
        if (gameOver) {
            return; // 게임 종료 시 함수 중단
        }
        let userNum = userInput.value;

        if (userNum > 100 || userNum < 1) {
            alert('1 에서 100 사이의 숫자를 입력해야 합니다.');
            return;
        }

        if (userNumList.includes(userNum)) {
            alert('이전에 입력한 숫자를 입력했습니다.');
            return;
        }

        chance--;

        userNumList.push(userNum);

        if (userNum < comNum) {
            resultImg.src = Math.random() < 0.5 ? upImg[0] : upImg[1];
            resultElement.innerText = '업!!';
        } else if (userNum > comNum) {
            resultImg.src = Math.random() < 0.5 ? downImg[0] : downImg[1];
            resultElement.innerText = '다운!';
        } else if (userNum == comNum) {
            resultImg.src = '/images/clear.png';
            resultElement.innerText = '정답입니다';
            gameOver = true;
        }

        chancesElement.innerText = chance;
        chancesElement.style.color = colors[chance];
        chancesElement.style.fontSize = `${Math.max(2, chance)}vw`;

        if (chance <= 0) {
            gameOver = true;
        }

        if (gameOver == true) {
            searchBtn.disabled = true;
            searchBtn.style.filter = 'grayscale(100%)';
            searchBtn.style.pointerEvents = 'none';
            return;
        }
    }

    function clear() {
        userInput.value = '';
    }

    function reset() {
        setRandomNum();
        resultImg.src = '/images/first game_UI.png';
        userInput.value = '';
        gameOver = false;
        chance = 5;
        userNumList = [];
        chancesElement.innerText = chance;
        chancesElement.style.color = colors[chance];
        chancesElement.style.fontSize = `${chance}vw`;
        searchBtn.disabled = false;
        searchBtn.style.filter = 'none';
        searchBtn.style.pointerEvents = 'auto';
    }
};
