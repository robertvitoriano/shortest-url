import { app } from './app'
import { variables } from './config/variables'

app.listen(variables.PORT,()=>{
  console.log('My application is running '+ variables.PORT)
})