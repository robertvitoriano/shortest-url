import express from 'express'
import morgan from 'morgan'
import { variables } from './config/variables'

console.log(variables.PORT);

const app = express()

app.use(express.json())
app.use(morgan('tiny'))

export { app }