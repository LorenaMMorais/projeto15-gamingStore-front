import axios from "axios"

const BASE_URL = process.env.REACT_APP_API_BASE_URL

function signin(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body)
    return promise
}

function signup(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body)
    return promise
}

const apiAuth = { signin, signup }
export default apiAuth