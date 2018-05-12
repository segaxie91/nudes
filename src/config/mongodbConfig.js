/**
 * http://www.runoob.com/nodejs/nodejs-mongodb.html
 */

import mongodb, { MongoClient } from 'mongodb';
const url = "mongodb://127.0.0.1:27017/log";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log('数据库已创建!');
  db.close();
});