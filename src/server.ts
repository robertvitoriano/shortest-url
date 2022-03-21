import { app } from './app'

import { variables } from './config/variables';
import { db } from './database/configuration';


app.listen(variables.PORT, async() => {
 await db.sync({ force: false });
  console.log(`My application is running ${variables.PORT}`)
})