/**
 * http://www.runoob.com/nodejs/nodejs-mysql.html
 */

import mysql from 'mysql';
let connection = mysql.createConnection({
  host      : '127.0.0.1',
  user      : 'root',
  password  : '123456',
  database  : 'estate'
});

connection.connect();

connection.query('select 1 + 1 as solution', (error, results, fileds) => {
  if (error) throw error;
  console.log(`The solution is : ${results[0].solution}`)
});