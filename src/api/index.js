import http from '@/axios'

let login = (url, params) => http(url, params, 'POST')
let logout = (url, params) => http(url, params, 'POST')

const $http = {}

Object.assign($http, {
    login,
    logout
})

const install = function (Vue, opts = {}) {
    console.log(opts);
    Vue.prototype.$http = $http;
}

export default install
