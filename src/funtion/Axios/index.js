import axios from 'axios'

const request = axios.create({
    baseURL: 'https://vouch-test.herokuapp.com/',
    timeout: 5000
})

export default request
