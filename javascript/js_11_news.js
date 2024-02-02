const API_KEY = `1825671e944f4bdf9b1d73315265f7fe`;
let news = [];
const getLatestNews = async () => {
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`);

    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
};
