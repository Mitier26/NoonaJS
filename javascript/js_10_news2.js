const API_KEY = `1825671e944f4bdf9b1d73315265f7fe`;
let newsList = [];
const menus = document.querySelectorAll('.menus button');

let url = new URL(`https://noonajs.netlify.app/top-headlines?country=kr`);

let totalResults = 0;
let page = 1;
let totalPages = 1;
const pageSize = 10;
const groupSize = 5;

menus.forEach((item) => {
    item.addEventListener('click', (event) => getNewsByCategory(event));
});

// 사이드 메뉴
const sideMenus = document.querySelectorAll('.side-menus button');

sideMenus.forEach((item) => {
    item.addEventListener('click', (event) => getNewsByCategory(event));
});

function sideMenu() {
    document.getElementById('side-menus').classList.toggle('showSide');
}

// 검색 버튼
const searchOn = () => {
    document.getElementById('input-box').classList.toggle('search-on');
};

// function clearText(event) {
//     event.value = '';
// }

const getNews = async () => {
    try {
        url.searchParams.set('page', page);
        url.searchParams.set('pageSize', pageSize);
        const response = await fetch(url);
        const data = await response.json();
        if (response.status === 200) {
            if (data.articles.length === 0) {
                throw new Error('No result for this search');
            }
            newsList = data.articles;
            totalResults = data.totalResults;
            console.log(newsList);
            render();
            paginationRender();
        } else {
            let errorStatus = response.status;
            let errorCode = response.code;
            if (errorStatus === 400) throw new Error('요청이 허락되지 않습니다.');
            else if (errorStatus === 401) throw new Error('API키가 올바르지 않습니다.');
            else if (errorStatus === 429) throw new Error('요청이 너무 많습니다.');
            else if (errorStatus === 500) throw new Error('NewsApi가 고장났습니다');

            if (errorCode == 'apiKeyDisabled') throw new Error('API 키가 비활성화 되었습니다.');
            else if (errorCode == 'apiKeyExhausted') throw new Error('API로 더이상 요청할 수 없다.');
            else if (errorCode == 'apiKeyInvalid')
                throw new Error('API 키가 올바르게 입력되지 않았습니다. 다시 확인하고 다시 시도하십시오');
            else if (errorCode == 'apiKeyMissing') throw new Error('요청에서 API 키가 없습니다.');
            else if (errorCode == 'parameterInvalid')
                throw new Error('지원되지 않는 매개 변수를 요청에 포함 시켰습니다. ');
            else if (errorCode == 'parametersMissing') throw new Error('매개 변수가 누락되어 완료 할 수 없습니다.');
            else if (errorCode == 'rateLimited') throw new Error('당신은 요금이 제한되었습니다.');
            else if (errorCode == 'sourcesTooMany') throw new Error('한 번의 요청으로 너무 많은 소스를 요청했습니다.');
            else if (errorCode == 'sourceDoesNotExist') throw new Error('존재하지 않는 소스를 요청했습니다.');
            else if (errorCode == 'unexpectedError') throw new Error('나의 잘못.');
            throw new Error(data.message);
        }
    } catch (error) {
        errorRender(error.message);
    }
};

const getLateNews = async () => {
    page = 1;
    // 뉴스를 받아오기전에 어디서 가지고 올지 지정해 주어야한다.
    url = new URL(`https://noonajs.netlify.app/top-headlines?country=kr`);
    // URL 자바스트립트에서 제공하는 인스턴스
    // console.log(url);
    // 출력해보면 postman처럼 각각 데이터가 들어 간다.

    // const response = fetch(url);
    // console.log(response);
    // pending : 대기 상태, fetch를 이용해 url를 보냈는데.
    // response가 아직 돌아 오지 않는 상태이다.
    // response가 돌아 올 때 까지 기다려야한다.
    // 이때 사용하는 것이 await 이다.
    // 그런데 await는 비동기 상태에서만 사용할 수 있다.
    //const response = await fetch(url);
    // 위 함수를 시작하기 전에 비동기라고 알려주는 async를 해 주어야한다.

    // response로 돌아온 것을 json형태로 변경한다.
    // 통신을 하는 것은 await를 해주어야한다.
    //const data = await response.json();

    // 매번 읽지 않게 저장을 한다.
    //newsList = data.articles;

    //render();
    getNews();
    // console.log(newsList);
};

const getNewsByCategory = async (event) => {
    page = 1;
    const category = event.target.textContent.toLowerCase();

    url = new URL(`https://noonajs.netlify.app/top-headlines?country=kr&category=${category}`);

    getNews();
};

const getNewsByKeyword = async () => {
    page = 1;
    const keyword = document.getElementById('search-input').value;
    url = new URL(`https://noonajs.netlify.app/top-headlines?country=kr&q=${keyword}`);
    searchOn();
    document.getElementById('search-input').value = '';
    getNews();
};

const render = () => {
    let newsHTML = newsList
        .map(
            (news) => ` 
    <div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="${
                news.urlToImage == null
                    ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'
                    : news.urlToImage
            }" alt="" />
        </div>
        <div class="col-lg-8">
            <h2>${news.title}</h2>
            <p class='news-text'>${
                news.description == null || news.description == ''
                    ? '내용없읍'
                    : news.description.length > 200
                    ? news.description.substring(0, 200) + '...'
                    : news.description
            }</p>
            <div>${news.source == null ? 'No Source' : news.source.name} * ${moment(news.publishedAt).fromNow()}</div>
        </div>
    </div>`
        )
        .join('');

    document.getElementById('news-board').innerHTML = newsHTML;
};

const errorRender = (errorMessage) => {
    const errorHTML = `<div class="alert alert-danger" role="alert">${errorMessage}</div>`;

    document.getElementById('news-board').innerHTML = errorHTML;
};

const paginationRender = () => {
    // totalResult
    // page
    // pagesize
    // groupSize

    totalPages = Math.ceil(totalResults / pageSize);

    // pageGroup
    let pageGroup = Math.ceil(page / groupSize);
    // lastPage
    let lastPage = pageGroup * groupSize;
    // 마지막 페이지그룹이 그룹사이즈 보다 작으면 lastPage = totalPage
    if (lastPage > totalPages) {
        lastPage = totalPages;
    }
    // firstPage
    const firstPage = lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);
    // console.log(pageGroup);
    let pagiNationHTML = '';

    if (pageGroup > 1) {
        pagiNationHTML += `<li class="page-item" onclick="moveToPage(${1})"><a class="page-link" href="#">&lt&lt</a></li>`;
    }

    if (page > firstPage) {
        pagiNationHTML += `<li class="page-item" onclick="moveToPage(${
            page - 1
        })"><a class="page-link" href="#">&lt</a></li>`;
    }

    for (let i = firstPage; i <= lastPage; i++) {
        pagiNationHTML += `<li class="page-item ${i === page ? 'active' : ''}" onclick="moveToPage(${i})">
                    <a class="page-link">
                        ${i}
                    </a>
                </li>`;
    }
    if (page < totalPages) {
        pagiNationHTML += `<li class="page-item" onclick="moveToPage(${
            page + 1
        })"><a class="page-link" href="#">&gt</a></li>`;
    }

    if (page < totalPages) {
        pagiNationHTML += `<li class="page-item" onclick="moveToPage(${totalPages})"><a class="page-link" href="#">&gt&gt</a></li>`;
    }

    document.querySelector('.pagination').innerHTML = pagiNationHTML;
};

const moveToPage = (pageNum) => {
    page = pageNum;
    console.log(page);
    getNews();
};

getLateNews();

// 카데고리 버튼에 클릭 이벤트를 준다.
// 카데로리 별 뉴스를 가지고 온다.
// 가지고온 뉴스를 보여준다.
