const env = {
    database: 'nodedb',
    username: 'admin',
    password: 'Garcia2020$',
    host: 'database-node.ca8lxpap9vdo.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;
  