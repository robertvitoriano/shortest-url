import { app } from './app'

const {variables } = require('./../config/variables')

app.listen(variables.PORT || 3333,()=>{
  console.log('My application is running '+ variables.PORT)
})