import mysql from'mysql';
import config from 'dos-config';

let pool = mysql.createPool({
  connectionLimit : config.connectionDb.poolLimit,
  host     : config.connectionDb.host,
  user     : config.connectionDb.user,
  password : config.connectionDb.password,
  database : config.connectionDb.databaseName
});

let getConnection = function (callBack) {
    pool.getConnection(function (err, connection) {
        if(err) {
          return callBack(err);
        }
        callBack(null, connection);
    });
};

export default getConnection;


pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
