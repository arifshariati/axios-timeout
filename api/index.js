const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000

const { setTimeout } = require('timers/promises')

app.get('/api/withDelay', async (req, res) => {
    const waitTime = 50000
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



app.listen(PORT, () => console.log(`API running on port ${PORT}`))