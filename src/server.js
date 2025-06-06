import express from 'express';
import dotenv from 'dotenv';
import User from './models/Users.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
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
