// lib/db.ts
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.PG_CONNECTION_STRING,
  // You can add additional options here if needed
});

export default pool;
