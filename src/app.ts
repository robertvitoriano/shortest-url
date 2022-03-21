import express from 'express'
import morgan from 'morgan'
import {urlShorterRouter} from './routes'


const app = express()

app.use(express.json())
app.use(urlShorterRouter)
app.use(morgan('tiny'))

export { app }