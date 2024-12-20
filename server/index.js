import express from 'express';
import pg from 'pg';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

const pool = new pg.Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Get todos
app.get('/api/todos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.todos');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 