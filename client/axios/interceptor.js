export const axiosInterceptor = (request) => {

    // request
    request.interceptors.request.use((r) => {
        console.log('-'.repeat(50))
        console.log(`METHOD: ${r.method.toUpperCase()}`)
        console.log(`URL: ${r.url}`)
        

        // request configs
        r.meta = r.meta || {}
        r.meta.requestStartedAt = new Date().getTime()
        return r
    }, async (e) => {
        console.log('I am here')
        console.log(e)
        return Promise.reject(e)
    })


    // response 
    request.interceptors.response.use((r) => {
        console.log(`Execution time for: ${r.config.url} - ${new Date().getTime() - r.config.meta.requestStartedAt} ms`)
        console.log('-'.repeat(50))
        return r
    },
        async (e) => {
            const { config, message } = e

            // Reject promise if request config is not defined
            if (!config || !config.retry) {
                return Promise.reject(e)
            }

            if (!(message.includes('timeout') || message.includes('Network Error'))) {
                return Promise.reject(e)
            }

            config.retry -= 1

            const delayRetryRequest = new Promise((resolve) => {
                setTimeout(() => {
                    console.log('retry the request', config.url)
                    resolve()
                }, config.retryDelay || 1000)
            })

            return delayRetryRequest.then(() => request(config))

        })
}