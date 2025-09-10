const express = require('express');
const router = express.Router();
const { addStore, rateStore } = require('../controllers/storeController');
const { verifyToken } = require('../middlewares/auth');

router.post('/add', verifyToken, addStore);
router.post('/rate', verifyToken, rateStore);

module.exports = router;
