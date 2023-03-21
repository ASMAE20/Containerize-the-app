const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title juhf":"First Text"
    },
    {
      "id":"2as",
      "title":"Second Text"
    },
    {
      "id":"3",
      "title":"Third Text"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening  on port 4000 ...')
})

