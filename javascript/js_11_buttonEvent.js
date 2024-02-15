let horizontalUnderLine = document.getElementById('horizontal-underline');
let horizontalMenus = document.querySelectorAll('nav:first-child a');

let firstHorizontalMenu = horizontalMenus[0]; // 첫 번째 메뉴
horizontalUnderLine.style.left = firstHorizontalMenu.offsetLeft + 'px';
horizontalUnderLine.style.width = firstHorizontalMenu.offsetWidth + 'px';
horizontalUnderLine.style.top = firstHorizontalMenu.offsetTop + firstHorizontalMenu.offsetHeight + 'px';

horizontalMenus.forEach((menu) => menu.addEventListener('click', (e) => horizontalIndicator(e)));

function horizontalIndicator(e) {
    horizontalUnderLine.style.left = e.currentTarget.offsetLeft + 'px';
    horizontalUnderLine.style.width = e.currentTarget.offsetWidth + 'px';
    horizontalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 'px';
}

let verticalUnderLine = document.getElementById('vertical-underline');
let verticalMenus = document.querySelectorAll('nav:nth-child(2) a');

let firstVerticalMenu = verticalMenus[0]; // 첫 번째 메뉴
verticalUnderLine.style.left = firstVerticalMenu.offsetLeft + 'px';
verticalUnderLine.style.width = firstVerticalMenu.offsetWidth + 'px';
verticalUnderLine.style.top = firstVerticalMenu.offsetTop + firstVerticalMenu.offsetHeight + 'px';

verticalMenus.forEach((menu) => menu.addEventListener('click', (e) => verticalIndicator(e)));

function verticalIndicator(e) {
    verticalUnderLine.style.left = e.currentTarget.offsetLeft + 'px';
    verticalUnderLine.style.width = e.currentTarget.offsetWidth + 'px';
    verticalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 'px';
}
