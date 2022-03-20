import express from 'express'
import morgan from 'morgan'

import './database'

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

export { app }