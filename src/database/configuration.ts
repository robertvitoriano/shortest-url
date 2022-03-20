import { Sequelize } from "sequelize";

import {variables } from '../config/variables';

export const db = new Sequelize({
  dialect: "mysql",
  host: variables.MYSQL_HOST,
  port: variables.MYSQL_PORT,
  username: variables.MYSQL_USER,
  password: variables.MYSQL_PASSWORD,
  database: variables.MYSQL_DATABASE,
});

