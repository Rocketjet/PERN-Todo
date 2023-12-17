import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'perntodo',
  password: '12345qwe',
  port: 5432
});

export default pool;