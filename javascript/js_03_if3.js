window.onload = function () {
    const numberValue = document.getElementById('number').querySelector('input');
    const gradeValue = document.getElementById('grade').querySelector('input');
    const specValues = document.getElementById('spec').querySelectorAll('input');

    const numberBtn = document.getElementById('numberBtn');
    const gradeBtn = document.getElementById('gradeBtn');
    const specBtn = document.getElementById('specBtn');

    const numberResult = document.getElementById('number').querySelector('p');
    const gradeResult = document.getElementById('grade').querySelector('p');
    const specResult = document.getElementById('spec').querySelector('p');

    numberBtn.addEventListener('click', function () {
        const num = numberValue.value;
        let result = '';
        if (num == 0) {
            result = '입력하신 숫자는 0 입니다.';
        } else if (num > 0) {
            result = `입력하신 ${num} 은 양수입니다.`;
        } else if (num < 0) {
            result = `입력하신 ${num} 은 음수입니다.`;
        }
        numberResult.innerText = result;
    });

    gradeBtn.addEventListener('click', function () {
        const score = gradeValue.value;
        let result = '';
        if (score > 100) {
            result = '100 이하의 값을 입력하세요';
        } else if (score >= 90) {
            result = 'A 학점';
        } else if (score >= 80) {
            result = 'B 학점';
        } else if (score >= 70) {
            result = 'C 학점';
        } else if (score >= 60) {
            result = 'D 학점';
        } else if (score < 60 && score > 0) {
            result = 'F 학점';
        } else if (score < 0) {
            result = '0 보다 큰 수를 입력하세요';
        }
        gradeResult.innerText = result;
    });

    specBtn.addEventListener('click', function () {
        let result = '';
        for (let i = 0; i < specValues.length; i++) {
            if (specValues[2].checked && specValues[3].checked) {
                result = '합격입니다';
            } else if (specValues[2].checked || specValues[3].checked) {
                result = '예비학격입니다';
            } else {
                result = '불합격입니다';
            }
        }

        specResult.innerText = result;
    });
};
