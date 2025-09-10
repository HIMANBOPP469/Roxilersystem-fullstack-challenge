const db = require('../db');

const addStore = async (req, res) => {
  try {
    const { name, email, address, owner_id, description } = req.body;

    const [owner] = await db.query("SELECT * FROM users WHERE id = ? AND role = 'owner'", [owner_id]);
    if (!owner.length) return res.status(400).json({ message: 'Owner does not exist or not a store owner' });

    await db.query(
      'INSERT INTO stores (name, email, address, owner_id, description) VALUES (?, ?, ?, ?, ?)',
      [name, email, address, owner_id, description]
    );

    res.status(201).json({ message: 'Store added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const rateStore = async (req, res) => {
  try {
    const { store_id, rating } = req.body;
    const user_id = req.user.id;

    await db.query(
      `INSERT INTO store_ratings (store_id, user_id, rating)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE rating = ?`,
      [store_id, user_id, rating, rating]
    );

    res.json({ message: 'Rating submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { addStore, rateStore };
