const db = require('../db');

const getDashboard = async (req, res) => {
  try {
    const [stores] = await db.query('SELECT * FROM stores');
    const [users] = await db.query('SELECT * FROM users');

    res.json({
      totalStores: stores.length,
      totalUsers: users.length,
      stores,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getDashboard };
