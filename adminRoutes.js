const express = require('express');
const router = express.Router();
const { getDashboard } = require('../controllers/adminController');
const { verifyToken, isAdmin } = require('../middlewares/auth');

router.get('/dashboard', verifyToken, isAdmin, getDashboard);

module.exports = router;
