const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bot', (req, res) => {
    res.send('bot url')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})