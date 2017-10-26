import mysql from'mysql';
import config from 'dos-config';

var connection = mysql.createConnection({
  host     : config.connectionDb.host,
  user     : config.connectionDb.user,
  password : config.connectionDb.password,
  database : config.connectionDb.databaseName
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();