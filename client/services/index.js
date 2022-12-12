import config from '../config/index.js'
const { withDelayUrl, withoutDelayUrl, postDataUrl } = config.urls

export const postDataService = async (request) => {
    try {
        const { data } = await request.post(postDataUrl, { id: 1, name: 'ABC' })
        console.log(data)
        return true
    } catch (e) {
        console.log('--- postDataService CATCH BLOCK ---')
        console.log(e.message)
        return false
    }
}


export const withDelay = async (request) => {
    try {
        const { data } = await request.get(withDelayUrl)
        console.log(data)
        return true
    } catch (e) {
        console.log('--- withDelay CATCH BLOCK ---')
        console.log(e.message)
        return false
    }
}


export const withoutDelay = async (request) => {
    try {
        const { data } = await request.get(withoutDelayUrl)
        console.log(data)
        return true
    } catch (e) {
        console.log('--- withoutDelay CATCH BLOCK ---')
        console.log(e.message)
        return false
    }
}