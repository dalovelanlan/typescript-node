import express from 'express'

import router from './router'

const app = express()

const port = 9000

app.use(router)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
