import result from './response.json'

// import axios from 'axios'

// const NEWS_API_BASE_URL = 'https://rss-parser-server.herokuapp.com/api/v1/rss/parser'

class NewsService {
    // getNews (link) {
    //     return axios.post(NEWS_API_BASE_URL, {url: link})
    // }
    getNews = () => result;
}

export default new NewsService()