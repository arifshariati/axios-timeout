import axios from 'axios'

export const getAxiosInstance = () => {
    const axiosAbort = new AbortController()

    const request = axios.create({
        withCredentials: true,
        signal: axiosAbort.signal,
        retry: 3,
        retryDelay: 3000
    })

    request.defaults.maxRedirects = 0
    request.defaults.timeout = 3000

    return { request, axiosAbort }
}