import axios from'axios'

const axiosInstace=axios.create({
    baseURL:'https://api.themoviedb.org',
    params:{
        'api_key':'93eef80a770c6ca7d6a6fb918f6195aa'
    }
})
export default axiosInstace