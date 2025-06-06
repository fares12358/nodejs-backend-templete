import express from 'express';
import dotenv from 'dotenv';
import User from './models/Users.js';
import connectDB from './config/db.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.FRONT_BASE_URL, // ✅ Allow requests only from this origin (frontend)
  credentials: true                // ✅ Allow cookies, tokens, or headers like Authorization
}));

dotenv.config();
// Connect to MongoDB
connectDB();
// Routes
app.get('/', (req, res) => {
  res.send('Hello, Modular Backend!');
});

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});