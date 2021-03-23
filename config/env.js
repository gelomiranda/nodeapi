const env = {
    database: 'nodedb',
    username: 'gelo',
    password: '123456',
    port:3306,
    //host: 'database1.ca8lxpap9vdo.us-east-2.rds.amazonaws.com',
    host: 'localhost',
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: 'mysql',
    dialectOptions: {
      ssl:'Amazon RDS'
  },
    pool: { maxConnections: 5, maxIdleTime: 30},
    language: 'en'
  };
   
  module.exports = env;
  