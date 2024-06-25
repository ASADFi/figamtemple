// db.js

// import { Pool } from 'pg';

// const pool = new Pool({
//   connectionString: 'postgresql://users_owner:Fs3Bk1gypmhb@ep-plain-mud-a5vca65r-pooler.us-east-2.aws.neon.tech/users?sslmode=require',
//   ssl: {
//     rejectUnauthorized: false // For self-signed certificates, set to false
//   }
// });

// export default pool;

// db.js

// import { Pool } from 'pg';

// const pool = new Pool({
//   connectionString: 'postgresql://users_owner:Fs3Bk1gypmhb@ep-plain-mud-a5vca65r-pooler.us-east-2.aws.neon.tech/users?sslmode=require',
//   ssl: {
//     rejectUnauthorized: false // For self-signed certificates, set to false
//   }
// });

// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack);
//   }
//   console.log('Connected to PostgreSQL database');
//   release();
// });

// export default pool;

const mysql = require("mysql");

const { HOST_NAME, USER_NAME, PASSWORD, DB_NAME } = process.env;

if (!HOST_NAME || !USER_NAME || !PASSWORD || !DB_NAME) {
  throw new Error(
    "Missing required environment variables for MySQL connection."
  );
}
const con = mysql.createConnection({
  host: process.env.HOST_NAME,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT, // or your database port
});

con.connect(function (err) {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

module.exports = con;
