const API_KEY = `1825671e944f4bdf9b1d73315265f7fe`;
let newsList = [];
const menus = document.querySelectorAll('.menus button');

menus.forEach((item) => item.addEventListener('click', (event) => getNewsByCategory(event)));

let url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`);

let totalResults = 0;
let page = 1;
const pageSize = 5;
const groupSize = 5;

const getNews = async () => {
    try {
        url.searchParams.set('page', page);
        url.searchParams.set('pageSize', pageSize);
        console.log(url);
        const response = await fetch(url);

        const data = await response.json();
        if (response.status === 200) {
            if (data.articles.length === 0) {
                throw new Error('No Result for this search');
            }
            newsList = data.articles;
            totalResults = data.totalResults;
            render();
            paginationRender();
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        errorRender(error.message);
    }
};

const getLatestNews = async () => {
    url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`);
    getNews();
};

const getNewsByCategory = async (event) => {
    const category = event.target.textContent.toLowerCase();
    url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}`);

    getNews();
};

const getNewsByKeyword = async (event) => {
    const keyword = document.getElementById('search-input').value;
    url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&q=${keyword}&apiKey=${API_KEY}`);

    getNews();
};

const render = () => {
    const newsHTML = newsList
        .map(
            (news) => ` 
        <div class="row news">
            <div class="col-lg-4">
                <img class="news-img-size" src="${news.urlToImage}" alt="" />
            </div>
            <div class="col-lg-8">
                <h2>${news.title}</h2>
                <p>${news.description}</p>
                <div>${news.source.name} * ${news.publishedAt}</div>
            </div>
        </div>`
        )
        .join('');

    document.getElementById('news-board').innerHTML = newsHTML;
};

const errorRender = (errorMessage) => {
    const errorHTML = `
                    <div class="alert alert-danger" role="alert">
                        ${errorMessage}
                    </div>
                    `;
    document.getElementById('news-board').innerHTML = errorHTML;
};

const paginationRender = () => {
    const pageGroup = Math.ceil(page / groupSize);
    const lastPage = pageGroup * groupSize;
    const totalPages = Math.ceil(totalResults / pageSize);
    if (lastPage > totalPages) {
        lastPage = totalPages;
    }
    const firstPage = lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);

    let paginationHTML = `<li class="page-item" onclick="moveToPage(${
        page - 1
    })"><a class="page-link" href="#">Previous</a></li>`;

    for (let i = firstPage; i <= lastPage; i++) {
        paginationHTML += ` 
                            <li class="page-item ${i === page ? 'active' : ''}" onclick="moveToPage(${i})">
                                <a class="page-link">
                                    ${i}
                                </a>
                            </li>`;
    }
    paginationHTML += `<li class="page-item" onclick="moveToPage(${
        page + 1
    })"><a class="page-link" href="#">Next</a></li>`;
    document.querySelector('.pagination').innerHTML = paginationHTML;
};

const moveToPage = (pageNum) => {
    page = pageNum;
    getNews();
};

getLatestNews();

//1. 버튼들에 이벤트를 주어야한다.
//2. 카데고리별 뉴스 가져오기
//3. 뉴스 보여주기
