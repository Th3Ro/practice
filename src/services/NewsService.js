import axios from 'axios'

const NEWS_API_BASE_URL = 'https://rss-parser-server.herokuapp.com/api/v1/rss/parser'

class NewsService {
    getNews (link) {
        return axios({
            method: 'post',
            url: NEWS_API_BASE_URL,
            headers: {
                'Content-Type': 'application/json'
            },
            data: { url: link }
        })
    }
}

export default new NewsService()