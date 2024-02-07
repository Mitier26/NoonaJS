window.onload = function () {
    window.location.href = '/html/js_03_if3.html';

    const goalDate = new Date('2024-02-25').getTime();

    function calcDate() {
        const now = new Date().getTime();
        const distance = goalDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        days = days.toString().padStart(2, '0');
        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            return '종료';
        } else {
            return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남음`;
        }
    }

    setInterval(() => {
        document.getElementById('dday').innerText = calcDate();
    }, 1000);
};
