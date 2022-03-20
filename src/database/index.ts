
import { createConnection, getConnectionOptions } from 'typeorm';

import { variables} from './../../config/variables';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = String(variables.MYSQL_HOST);
  createConnection({
    ...options,
  });
});