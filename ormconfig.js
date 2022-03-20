const  { variables } =  require('./config/variables');

module.exports = {
  host: variables.MYSQL_HOST,
  type: 'mysql',
  port: variables.MYSQL_PORT,
  username: variables.MYSQL_USER,
  password: variables.MYSQL_PASSWORD,
  database: variables.MYSQL_DATABASE,
  entities: [
    "src/entities/*.ts"
  ],
  migrations: [
    'src/database/migrations/*.ts',
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  synchronize: false,
};