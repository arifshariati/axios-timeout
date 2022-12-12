const baseUrl = 'http://localhost:3000/api'
const config = {
    urls: {
        withDelayUrl: `${baseUrl}/withDelay`,
        withoutDelayUrl: `${baseUrl}/withoutDelay`,
        postDataUrl: `${baseUrl}/postData`
    }
}

export default config