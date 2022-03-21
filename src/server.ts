import { app } from './app'

import { variables } from './config/variables';
import { db } from './database/configuration';


app.listen(variables.PORT, () => {
  db.sync();
  console.log(`My application is running ${variables.PORT}`)
})