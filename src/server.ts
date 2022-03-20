import { app } from './app'

app.listen(process.env.PORT || 3333,()=>{
  console.log(`My application is running ${process.env.PORT || 3333}`)
})