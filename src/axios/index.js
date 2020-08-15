import axios from "axios"
import baseUrl from "./env"

const MIME = [
    'application/x-www-form-urlencoded',
    'application/json'
]
const METHOD = ['GET', 'POST']

axios.defaults.crossDomain = true
axios.defaults.baseUrl = baseUrl.http_url
axios.defaults.tineout = 10000
axios.defaults.headers.post['Content-Type'] = MIME[1]


axios.interceptors.response.use(
    (res) => {


    }, (err) => {

    })


axios.interceptors.request.use(
    (res) => {


    }, (err) => {

    })


class KV {
    static stringify(obj) {

    }

}

export default async function (url, params, method = METHOD[0]) {
    if (!url) {
        throw new Error('url 设置不正确');
    }
    if (method === METHOD[0]) {
        return await axios.get(url + params, null);

    } else if (method === METHOD[1]) {
        return await axios.post(url, JSON.stringify(params), null);
    } else {
        throw new Error('不支持的http类型');
    }

}


