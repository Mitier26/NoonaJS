const sosu_val = document.getElementById('sosu-val');
const sosu_btn = document.getElementById('sosu-btn');
const sosu_result = document.getElementById('sosu-result');

const lot_btm = document.getElementById('lot-btn');
const lot_holder = document.getElementById('lot-holder');

window.onload = () => {
    sosu_btn.addEventListener('click', () => {
        const num = sosu_val.value;

        result = num + '은 소수임';

        if (num < 1) {
            alert('1 이상의 수를 입력해야합니다.');
            sosu_val.value = '';
            result = '입력의 오류';
        } else {
            if (num == 1) {
                result = '1은 소수가 아님';
            } else {
                for (let i = 2; i < num; i++) {
                    if (num % i == 0) {
                        result = num + '은 소수가 아님';
                        break;
                    }
                }
            }
        }

        sosu_result.innerText = result;
    }); //sosu_btn

    let nums = [];

    for (let i = 0; i < 45; i++) {
        nums[i] = i + 1;
    }

    // 번호 추출기
    lot_btm.addEventListener('click', function () {
        let balls = lot_holder.children;

        // 랜덤 수 만들기
        for (let i = 0; i < 100; i++) {
            let randA = Math.floor(Math.random() * 45);
            let randB = Math.floor(Math.random() * 45);

            let temp = nums[randA];
            nums[randA] = nums[randB];
            nums[randB] = temp;
        }

        let newArr = nums.slice(0, 6);

        newArr.sort(function (a, b) {
            return a - b;
        });

        for (let i = 0; i < 6; i++) {
            balls[i].innerText = newArr[i];

            let num = parseInt(newArr[i]);

            balls[i].style.color = 'white';
            // 각 범위에 따라 색상 지정
            if (num >= 1 && num <= 10) {
                balls[i].style.backgroundColor = 'yellow';
                balls[i].style.color = 'black';
            } else if (num >= 11 && num <= 20) {
                balls[i].style.backgroundColor = 'blue';
            } else if (num >= 21 && num <= 30) {
                balls[i].style.backgroundColor = 'red';
            } else if (num >= 31 && num <= 40) {
                balls[i].style.backgroundColor = 'gray';
            } else if (num >= 41 && num <= 45) {
                balls[i].style.backgroundColor = 'green';
            }
        }
    });
}; //onload
