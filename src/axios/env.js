
const devIpPort = ''
const proIpPort = ''

const baseUrl = process.env.NODE_ENV === 'production' ? {
    http_url: `http://${proIpPort}`
} : {
        http_url: `http://${devIpPort}`
    }


export default baseUrl