import axios from 'axios'

const request = axios.create({
    baseURL: 'https://vouch-test.herokuapp.com/tickets',
    timeout: 5000
})

export default request
