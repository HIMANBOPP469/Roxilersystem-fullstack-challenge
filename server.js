// server.js
const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const storeRoutes = require('./routes/storeRoutes');
const adminRoutes = require('./routes/adminRoutes');
const db = require('./db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/user', userRoutes);
app.use('/store', storeRoutes);
app.use('/admin', adminRoutes);

// Test DB connection using async/await
(async () => {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('MySQL connected successfully');
  } catch (err) {
    console.error('MySQL connection failed:', err);
  }
})();

// Default route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
