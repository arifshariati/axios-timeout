
import { getAxiosInstance } from './axios/index.js'
import { axiosInterceptor } from './axios/interceptor.js'
import { postDataService, withDelay, withoutDelay } from './services/index.js'
const { request } = getAxiosInstance()

const init = async () => {
    axiosInterceptor(request)
    let processCompleted = false
    let step = 'postData'

    while (!processCompleted) {
        switch (step) {
            case 'postData':
                await postDataService(request)
                step = 'withDelay'
                break
            case 'withDelay':
                await withDelay(request)
                step = 'withoutDelay'
                break
            case 'withoutDelay':
                await withoutDelay(request)
                processCompleted = true
                break
            default:
                processCompleted = true
                break
        }
    }

    console.log('Execution finished')
}

init()