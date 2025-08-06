import axios from'axios'

const axiosInstace=axios.create({
    baseURL:'https://api.themoviedb.org',
    params: {
  'api_key': import.meta.env.VITE_API_KEY
}

})
export default axiosInstace