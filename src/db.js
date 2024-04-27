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

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgresql://users_owner:Fs3Bk1gypmhb@ep-plain-mud-a5vca65r-pooler.us-east-2.aws.neon.tech/users?sslmode=require',
  ssl: {
    rejectUnauthorized: false // For self-signed certificates, set to false
  }
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to PostgreSQL database');
  release();
});

export default pool;
