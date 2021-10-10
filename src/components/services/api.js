import axios from 'axios'
import qs from 'qs'
import { APP_KEY, BASE_URL, TYPE} from '../config/api_config'

export const getMovies =  async (category, type) => {

    if (type === "movie") {
        try {
            const res = await axios.get(`${BASE_URL}/movie/${category}?api_key=${APP_KEY}&language=en-US&page=1`)
            const movies = res.data
            return movies
        } catch (err) {
            console.error(err)
        }      
    } else if (type === "TVShows") {
        try {
            const res = await axios.get(`${BASE_URL}/tv/${category}?api_key=${APP_KEY}&language=en-US&page=1`)
            const tvShows = res.data
            return tvShows
        } catch (err) {
            console.error(err)
        }      
    } else {
        try {
            const keyword = category
            const res = await axios.get(`${BASE_URL}/search/multi?api_key=${APP_KEY}&language=en-US&page=1&query="${keyword}"`)
            const movies = res.data
            return movies
        } catch (err) {
            console.error(err)
        }   
    }

    

    
    
}