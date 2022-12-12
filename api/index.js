const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

const { setTimeout } = require('timers/promises')

const delayTimeInSeconds = [1, 2, 3, 4]
app.get('/api/withDelay', async (req, res) => {
    const waitTime = delayTimeInSeconds[Math.floor(Math.random() * delayTimeInSeconds.length)] * 1000
    console.log(`/api/withDelay waitTime = ${waitTime / 1000} seconds`)
    await setTimeout(waitTime)

    res.json({
        message: `response delayed for ${(waitTime / 1000)} Sec.`
    })
})

app.get('/api/withoutDelay', (req, res) => {
    res.json({
        message: 'alive'
    })
})

app.post('/api/postData', async (req, res) => {
    const waitTime = delayTimeInSeconds[Math.floor(Math.random() * delayTimeInSeconds.length)] * 1000
    console.log(`/api/postData waitTime = ${waitTime / 1000} seconds`)
    console.log('payload => ', req.body)
    await setTimeout(waitTime)

    res.status(201).json({
        message: 'post data received and executed.'
    })
})



app.listen(PORT, () => console.log(`API running on port ${PORT}`))