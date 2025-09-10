const express = require('express');
const router = express.Router();
const { updatePassword } = require('../controllers/userController');
const auth = require('../middlewares/auth'); // JWT middleware

// Password Update API
router.put('/update-password', auth, updatePassword);

module.exports = router;
